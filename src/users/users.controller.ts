import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserDto } from "src/dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private UserService: UsersService) {}
  
  @Post()
  async create(@Body() createUser: CreateUserDto) {
    return this.UserService.create(createUser);
  }
}
