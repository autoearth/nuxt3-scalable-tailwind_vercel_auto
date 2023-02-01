//ระบุ type
export interface Post {
    id: number;
    date: string;
    title: {
        rendered: string;
    };
    slug: string;
    excerpt: {
        rendered: string;
    };
    Link: string;
    author: number;
    _embedded: any;
    content: {
        rendered: string;
    };
}