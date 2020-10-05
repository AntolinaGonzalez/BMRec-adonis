import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/bmrec')],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
