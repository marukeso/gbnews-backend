import { registerEnumType } from '@nestjs/graphql';

export enum ItemScalarFieldEnum {
    id = "id",
    name = "name",
    startDate = "startDate",
    endDate = "endDate",
    basePrice = "basePrice",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ItemScalarFieldEnum, { name: 'ItemScalarFieldEnum', description: undefined })
