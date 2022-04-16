import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateMemberDto } from './dto/create-member.dto'
import { MembersService } from './members.service'

@Controller('members')
export class MembersController {
  constructor(private memberService: MembersService) {}

  @Post()
  createMember(@Body() createMember: CreateMemberDto) {
    console.log(createMember)
    return this.memberService.create(createMember)
  }

  @Get(':id')
  getMember(@Param('id') id: number) {
    return this.memberService.findOne(id)
  }
}
