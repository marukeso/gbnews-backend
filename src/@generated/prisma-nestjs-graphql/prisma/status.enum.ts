import { registerEnumType } from '@nestjs/graphql';

export enum Status {
    LIVE = "LIVE",
    UPCOMING = "UPCOMING",
    IC = "IC",
    ENDED = "ENDED"
}


registerEnumType(Status, { name: 'Status', description: undefined })
