import { Injectable, UnauthorizedException } from '@nestjs/common'
import { EmailMemberDto, SinginEmailBodyDto, SocialMemberDto } from './dto/member.dto'
import { MembersRepository } from './members.repository'
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private membersRepository: MembersRepository, private jwtService: JwtService) {}

  async createEmailMember(memberDto: EmailMemberDto) {
    return await this.membersRepository.createEmail(memberDto)
  }

  async createSocialMember(memberDto: SocialMemberDto) {
    return await this.membersRepository.createSocial(memberDto)
  }

  async signinEmailMember(singinEmailBodyDto: SinginEmailBodyDto): Promise<{ accessToken: string }> {
    const { email, password } = singinEmailBodyDto
    const member = await this.membersRepository.findByEmail(email)

    if (member && (await bcrypt.compare(password, member.password))) {
      // create member token
      const payload = { id: member.id, nickname: member.nickname, email: member.email }
      const accessToken = this.jwtService.sign(payload)
      return { accessToken }
    } else {
      throw new UnauthorizedException('login failed')
    }
  }

  async getMemberById(id: number) {
    return await this.membersRepository.findById(id)
  }

  async removeMemberById(id: number) {
    return await this.membersRepository.removeById(id)
  }
}
