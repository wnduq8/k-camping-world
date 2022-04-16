export class CreateMemberDto {
  email: string
  password: string
  nickname: string
  photo_url?: string
  social_flatform?: string
  is_social_login?: boolean
}
