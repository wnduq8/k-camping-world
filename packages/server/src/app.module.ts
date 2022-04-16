import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { MembersModule } from './members/members.module'

@Module({
  imports: [PrismaModule, MembersModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
