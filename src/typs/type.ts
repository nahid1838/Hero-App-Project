export interface IApp {
    image: string;
    title: string;
    companyName: string;
    id: number;
    description: string;
    size: number;
    reviews: string;
    ratingAvg: number;
    downloads: string;
    ratings: IRating[];
}

export interface IRating {
    name: string;
    count: number
}