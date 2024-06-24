import { Module } from '@nestjs/common';
import { UserResolver } from './User.resolver';
import { UserService } from './User.service';

@Module({
    imports: [],
    providers: [
        UserResolver,
        UserService,
    ],
})

export class UsersModule {}
