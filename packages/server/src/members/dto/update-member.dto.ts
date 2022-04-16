import { CreateMemberDto } from './create-member.dto'

export class UpdateMemberDto extends CreateMemberDto {
  lastlogin_datetime: Date
}
