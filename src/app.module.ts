import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { PostsModule } from './posts/posts.module';
import { UsersService } from './users/users.service';
import { PostsService } from './posts/posts.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, UsersModule, UsersModule, PostsModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    UsersService,
    PostsService,
    AuthService,
    JwtService,
  ],
})
export class AppModule {}
