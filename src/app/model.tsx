export enum MarriageStatus {
    Married,
    Divorced,
    Widowed,
}

export interface IPerson {
    dob: number;
    firstName: string;
    // true for male, false for female
    gender: boolean;
    lastName: string;
    spouse: IPerson;
}

export interface IFamily {
    children: IPerson[];
    left: IPerson;
    right: IPerson;
    status: MarriageStatus;
}
