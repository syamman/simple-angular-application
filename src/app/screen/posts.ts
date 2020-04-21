import { Observable } from 'rxjs';

export interface Post {
    title: string;
    body: string;
}

export abstract class PostData {
    abstract getPosts(): Observable<Post[]>;
}
