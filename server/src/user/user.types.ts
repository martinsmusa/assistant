import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UserInput {
    @Field(() => String)
    @IsNotEmpty()
    email: string;

    @Field(() => String)
    @IsNotEmpty()
    password: string;
}
