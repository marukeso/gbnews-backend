import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Status } from '../prisma/status.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ItemUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    imageUrl!: string;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:true})
    basePrice?: string;

    @Field(() => Status, {nullable:true})
    @Validator.IsNotEmpty()
    status?: keyof typeof Status;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
