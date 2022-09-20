import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  @Inject(ConfigService)
  public config: ConfigService;

  public getHello(): string {
    const databaseUrl: string = this.config.get('DATABASE_URL');

    console.log({ databaseUrl });

    return 'Hello World!';
  }
}
