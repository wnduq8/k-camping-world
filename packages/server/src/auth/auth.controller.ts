import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { EmailMemberDto, SinginEmailBodyDto, SocialMemberDto } from './dto/member.dto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private memberService: AuthService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  async signupByEmail(@Body() emailMemberDto: EmailMemberDto) {
    return await this.memberService.createEmailMember(emailMemberDto)
  }

  @Post('/signin/social')
  @UsePipes(ValidationPipe)
  async signupBySocial(@Body() socialMemberDto: SocialMemberDto) {
    socialMemberDto.is_social_login = true
    return await this.memberService.createSocialMember(socialMemberDto)
  }

  @Post('/signin/email')
  @UsePipes(ValidationPipe)
  async signinByEmail(@Body() singinEmailBodyDto: SinginEmailBodyDto): Promise<{ accessToken: string }> {
    return await this.memberService.signinEmailMember(singinEmailBodyDto)
  }

  @Get(':id')
  async getMember(@Param('id', ParseIntPipe) id: number) {
    return await this.memberService.getMemberById(id)
  }

  @Delete(':id')
  async removeMember(@Param('id', ParseIntPipe) id: number) {
    return await this.memberService.removeMemberById(id)
  }
}
