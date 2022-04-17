import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'
import { PrismaService } from 'src/prisma/prisma.service'
import { EmailMemberDto, MemberDto, SocialMemberDto } from './dto/member.dto'

@Injectable()
export class MembersRepository {
  constructor(private prismaService: PrismaService) {}

  async createEmail(memberDto: EmailMemberDto): Promise<EmailMemberDto> {
    try {
      const salt = await bcrypt.genSalt(10)
      memberDto.password = await bcrypt.hash(memberDto.password, salt)

      return await this.prismaService.members.create({ data: memberDto })
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException()
      } else {
        throw new InternalServerErrorException()
      }
    }
  }

  async createSocial(memberDto): Promise<SocialMemberDto> {
    try {
      return await this.prismaService.members.create({ data: memberDto })
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException()
      } else {
        throw new InternalServerErrorException()
      }
    }
  }

  async findById(id: number): Promise<MemberDto> {
    return await this.prismaService.members.findUnique({ where: { id } })
  }

  async findByEmail(email: string): Promise<EmailMemberDto> {
    return await this.prismaService.members.findUnique({ where: { email } })
  }

  async removeById(id: number): Promise<MemberDto | NotFoundException> {
    try {
      return await this.prismaService.members.delete({ where: { id } })
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException()
      } else {
        throw new InternalServerErrorException()
      }
    }
  }
}
