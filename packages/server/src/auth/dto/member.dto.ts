import { IsNotEmpty, IsEmail, IsString, IsBoolean, IsEmpty, MinLength, MaxLength, Matches } from 'class-validator'

export class MemberDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  nickname: string

  @IsEmpty()
  photo_url?: string

  @IsEmpty()
  created_at?: Date

  @IsEmpty()
  lastlogin_at?: Date
}

export class EmailMemberDto extends MemberDto {
  id: number
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  }) // 영문 및 숫자만 가능
  password: string
}

export class SocialMemberDto extends MemberDto {
  @IsString()
  social_flatform: string

  @IsBoolean()
  is_social_login: boolean
}

export class SinginEmailBodyDto {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  }) // 영문 및 숫자만 가능
  password: string
}
