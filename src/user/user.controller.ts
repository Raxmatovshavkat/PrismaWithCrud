import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto'; // Import DTOs
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id') id: number): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
