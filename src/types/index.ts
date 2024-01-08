export interface GenreType {
    id: number;
    name: string;
}
export interface MovieType {
    id: number;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface ChildItemType {
    title: string;
    link?: string;
    genre_id?: number;
}

export interface CategoryItemType {
    title: string;
    child?: string[] | ChildItemType[];
}

export interface NavbarItemType {
    id: number;
    title: string;
    genre_id: number;
    subMenu: boolean;
}
