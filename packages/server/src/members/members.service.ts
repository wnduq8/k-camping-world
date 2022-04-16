import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateMemberDto } from './dto/create-member.dto'
import { UpdateMemberDto } from './dto/update-member.dto'

@Injectable()
export class MembersService {
  constructor(private prismaService: PrismaService) {}
  create(createMemberDto: CreateMemberDto) {
    return this.prismaService.members.create({ data: createMemberDto })
  }

  findOne(id: number) {
    return this.prismaService.members.findUnique({ where: { id } })
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return this.prismaService.members.update({ data: updateMemberDto, where: { id } })
  }

  remove(id: number) {
    return this.prismaService.members.delete({ where: { id } })
  }
}
