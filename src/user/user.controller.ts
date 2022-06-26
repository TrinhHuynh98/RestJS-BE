import {
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
// import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { JwtGuard } from 'src/auth/guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Role } from 'src/auth/role.enum';

@Controller('user')
export class UserController {
  @Roles(Role.ADMIN)
  @UseGuards(JwtGuard, RolesGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
