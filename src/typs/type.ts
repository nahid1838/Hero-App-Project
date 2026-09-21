export interface AppType {
    id: number;
    image: string;
    title: string;
    companyName: string;
    description: string;
    size: number;
    reviews: string;
    ratingAvg: number;
    downloads: string;
    ratings: {
        name: string;
        count: number;
    }[];
}