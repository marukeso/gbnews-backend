import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class ItemMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:true})
    basePrice?: string;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
