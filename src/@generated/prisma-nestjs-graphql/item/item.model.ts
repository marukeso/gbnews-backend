import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { Category } from '../prisma/category.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class Item {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => Date, {nullable:true})
    startDate!: Date | null;

    @Field(() => Date, {nullable:true})
    endDate!: Date | null;

    @Field(() => String, {nullable:true})
    basePrice!: string | null;

    @Field(() => Status, {nullable:false,defaultValue:'LIVE'})
    status!: keyof typeof Status;

    @Field(() => Category, {nullable:false})
    category!: keyof typeof Category;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;
}
