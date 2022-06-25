import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModel } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModel,
    UserModule,
    BookmarkModule,
    PrismaModule,
    ProductModule,
  ],
})
export class AppModule {}
