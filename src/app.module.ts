import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://localhost/bmrec'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
