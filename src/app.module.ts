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
import { LocalStrategy } from './auth/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { getEnvPath } from './common/helper/env.helper';
import { ConfigModule } from '@nestjs/config';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [
    AuthModule,
    UsersModule,
    UsersModule,
    PostsModule,
    PassportModule,
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
    UsersService,
    PostsService,
    AuthService,
    JwtService,
    LocalStrategy,
  ],
})
export class AppModule {}
