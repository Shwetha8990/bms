

export class MovieEvent {
    EventGroup: string;
    EventTitle: string;
    EventCode: string;
    EventImageCode: string;
    EventLanguage: string;
    EventGenre: string;
    EventUrl:string;
    EventName: string;
    ShowDate: Date;
    DispReleaseDate: Date;
    MonthId: string;
    TrailerUrl: string;
    AllowPreBook: BoolResponse;
    IsAtmostEnabled: BoolResponse;
    TentativeReleaseDate: string;
    EventIsDefault: string;
    EventCensor:string;
    EventDimension: string;
    TimeURLUploadDate: Date;
    LanguageSequence: string;
    IsMovieClubEnabled: BoolResponse;
    IsPremier: BoolResponse;
    ratings: Rating;
    Region: any;
    wtsCount: number;
    wtsPerc: number;
}

export class Rating {
    bmsRating = 0;
    bmsCount = 0;
    criticRating = 0;
    criticCount = 0;
}



export enum BoolResponse {
    Y,
    N 
}