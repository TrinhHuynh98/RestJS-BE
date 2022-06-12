import { Module } from '@nestjs/common';
import { AuthModel } from './auth/auth.model';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModel, UserModule, BookmarkModule, PrismaModule],
})
export class AppModule {}
