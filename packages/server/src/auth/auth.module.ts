import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { MembersRepository } from './members.repository'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRRET_KEY,
      signOptions: {
        expiresIn: 60 * 60 * 3,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, MembersRepository],
})
export class AuthModule {}
