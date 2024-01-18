import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";

export const userConfigAsync:TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule.forRoot({
      isGlobal:true,
      })],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('HOST'),
        port: +configService.get('PORT'),
        username: configService.get('USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [User],
        synchronize: configService.get<boolean>('STATUS'),
      }),
      inject: [ConfigService],
    
}