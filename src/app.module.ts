import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { BookModule } from './Books/book.module';
import { Book } from './Books/book.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'Sanket@111098',
      database:'nestjs_project',
     // entities:[__dirname+'/**/*.entity(.ts,.js)'],
     entities:[Book],
      synchronize:true,
      logging:true
    }
    ),BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
