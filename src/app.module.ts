import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'infoUser',
      password: 'password',
      database: 'user',
      entities: [User],
      synchronize: true,
      //logging:true,//show the log in the terminal
    }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
