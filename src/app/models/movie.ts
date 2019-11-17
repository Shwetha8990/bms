export class MovieEvent {
    EventGroup: string;
    EventTitle: string;
    EventCode: string;
    EventImageCode: string;
    EventLanguage: string;
    EventGenre: string;
    EventURL: string;
    EventName: string;
    ShowDate: string;
    DispReleaseDate: string;
    MonthID: string;
    TrailerURL: string;
    AllowPreBook: BoolResponse;
    IsAtmosEnabled: BoolResponse;
    TentativeReleaseDate: Date;
    EventIsDefault: BoolResponse;
    EventCensor: string;
    EventDimension: BoolResponse;
    TrailerURLUploadDate: Date;
    LanguageSequence: number;
    IsMovieClubEnabled: BoolResponse;
    IsPremiere: BoolResponse;
    ratings: Rating;
    Region: any[];
    wtsCount: number;
    dwtsCount: number;
    maybeCount: number;
    csCount: number;
    trailerUploadDate: number;
    totalVotes: number;
    avgRating: number;
    wtsPerc: number;
    trailerType: number
}

export class Rating {
    bmsRating = 0;
    bmsCount = 0;
    criticRating = 0;
    criticCount = 0;
    userRating = 0;
    userCount = 0;
    userReviewCount = 0;
    avgRating = 0;
    totalVotes = 0;
    wtsCount = 0;
    dwtsCount = 0;
    maybe = 0;
    totalWTSCount = 0;
    wtsPerc = 0;
    dwtsPerc = 0;
}

export enum BoolResponse {
    Y,
    N
};

export class MovieFilter {
    languageFilter: Filter[] = [];
    genreFilter: Filter[] = [];
}

export class Filter {
    filterType: FilterType;
    value: string;
}

export enum FilterType {
    Language = 'EventLanguage',
    Genre = 'EventGenre'
}
