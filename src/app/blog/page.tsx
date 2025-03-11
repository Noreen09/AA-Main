import { getPosts, Post } from '@/lib/api';

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post: Post) => (
                    <li key={post.id}>
                        <h2>{post.title.rendered}</h2>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}