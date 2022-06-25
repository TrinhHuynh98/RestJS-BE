import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.cotroller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';

@Module({
  // imports: [PrismaModule],
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModel {}
