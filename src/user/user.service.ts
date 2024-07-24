import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto'; // Import DTOs
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findUserById(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.prisma.user.delete({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
