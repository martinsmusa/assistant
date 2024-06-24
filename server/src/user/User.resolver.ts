import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserService } from './User.service';
import { User } from './User.model';

@Resolver()
export class UserResolver {
    constructor(
        private userService: UserService,
    ) {}

    @Query(() => User, { nullable: true })
    getUserById(@Args('id', { type: () => Int }) id: number) {
        return this.userService.getUserById(id);
    }
}
