export interface Post {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
}

export async function getPosts(): Promise<Post[]> {
    const res = await fetch('https://seo.aimapogee.com/wp-json/wp/v2/posts');
    const posts: Post[] = await res.json();
    return posts;
}