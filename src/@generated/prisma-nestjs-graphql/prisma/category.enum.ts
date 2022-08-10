import { registerEnumType } from '@nestjs/graphql';

export enum Category {
    KEYCAPS = "KEYCAPS",
    KEYBOARDS = "KEYBOARDS",
    SWITCHES = "SWITCHES"
}


registerEnumType(Category, { name: 'Category', description: undefined })
