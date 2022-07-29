import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class Item {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    startDate!: Date | null;

    @Field(() => Date, {nullable:true})
    endDate!: Date | null;

    @Field(() => String, {nullable:true})
    basePrice!: string | null;

    @Field(() => Status, {nullable:false,defaultValue:'LIVE'})
    status!: keyof typeof Status;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;
}
