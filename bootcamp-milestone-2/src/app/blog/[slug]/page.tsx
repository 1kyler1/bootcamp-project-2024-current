
import React from 'react';
import Image from 'next/image';
import styles from './blog.module.css';




type IComment = {
  user: string;
  comment: string;
  date: Date;
};

type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  comments: IComment[];
};

type Props = {
  params: {
    slug: string;
  };
};


async function getBlog(slug: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching blog with slug: ${slug}`); // Log the slug
    const res = await fetch(`${baseUrl}/api/blog/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }

    const data = await res.json();
    // console.log(`Fetched blog data:`, data); // Log the fetched data
    return data;
  } catch (err: unknown) {
    console.error(`Error fetching blog: ${err}`); // Log the error
    return null;
  }
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div>Failed to load blog</div>;
  }

  

  return (
    <div>
      <main>
        <h1>{blog.title}</h1>
        <div className={styles.image} id="blog">
            <Image src={blog.image} alt={blog.title} height={500} width={500} />
        
        </div>
        <div className={styles.content} id="blog">
          <p>{blog.content}</p>
        </div>
        <div className={styles.comment} id="blog">
          <h2>Comments</h2>
          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment: IComment, index: number) => (
              <div key={index}>
                <p><strong>{comment.user}</strong>: {comment.comment}</p>
                <p><em>{new Date(comment.date).toLocaleString()}</em></p>
              </div>
            ))
          ) : (
            <p>Comments not found.</p>
          )}
        </div>
      </main>
      
    </div>
  );
}
export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/blogs`);
  const blogs: Blog[] = await res.json();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

