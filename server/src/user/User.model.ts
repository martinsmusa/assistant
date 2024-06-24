import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field(() => Int)
    id: number

    @Field(() => String)
    username: string

    @Field({nullable: true})
    displayName?: string
}
