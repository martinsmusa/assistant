import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserInput } from './user.types';

@Resolver(() => User)
export class UserResolver {
    constructor(
        private usersService: UserService,
    ) {}

    @Mutation(() => User)
    async createUser(@Args('data') data: UserInput): Promise<User> {
        return this.usersService.create(data);
    }

    @Query(() => User, { name: 'user' })
    async findUser(
        @Args('id') id: string,
    ): Promise<User> {
        const user = await this.usersService.findOne(parseInt(id));

        if (!user) {
            throw new NotFoundException('user not found');
        }

        return user;
    }

    @Query(() => [User], { name: 'users' })
    findAllUsers(
        @Args('email', { nullable: true }) email?: string,
    ): Promise<User[]> {
        return this.usersService.find(email);
    }

    @Mutation(() => Boolean, { name: 'removeUser' })
    async removeUser(@Args('id') id: string): Promise<boolean> {
        await this.usersService.remove(parseInt(id));
        return true;
    }

    @Mutation(() => User, { name: 'updateUser' })
    updateUser(
        @Args('id') id: string,
        @Args('data') data: UserInput,
    ): Promise<User> {
        return this.usersService.update(parseInt(id), data);
    }
}
