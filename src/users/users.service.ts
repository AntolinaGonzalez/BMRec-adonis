import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserDocument, User, UserSchema } from "src/schemas/user.schema";
@Injectable()
export class UsersService {
  constructor(@InjectModel("Users") private UserModel: Model<User>) {}

  async create(createUser: CreateUserDto){
    const user = new this.UserModel(createUser);
    return user.save();
  }
}
