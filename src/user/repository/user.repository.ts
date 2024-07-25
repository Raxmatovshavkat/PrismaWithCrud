import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(createUserDto: Prisma.UserCreateInput): Promise<Omit<User, 'password'>> {
        try {
            const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
            const { password, ...user } = await this.prisma.user.create({
                data: {
                    ...createUserDto,
                    password: hashedPassword,
                },
            });
            return user;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                console.error(error.code);
                throw new ConflictException();
            }
            throw new InternalServerErrorException();
        }
    }

    async findAll(take: string, skip: string): Promise<User[]> {
        const query = {
            skip: (+skip - 1) * +take,
            take: +take,
        };

        console.log(query);
        return this.prisma.user.findMany(query);
    }

    async findOne(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }
}
