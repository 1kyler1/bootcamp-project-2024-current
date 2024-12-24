import React from 'react';
import "@/app/full.css";
import BlogPreview from "@/components/blogPreview";
import getBlogs from '@/app/blogData';
import type { Blog } from "@/app/blogData";
import Link from 'next/link';



export default async function BlogPage() {
  const blogs: Blog[] = await getBlogs() || []; // Fetch data directly

//   console.log("All blogs:", JSON.stringify(blogs, null, 2));

    return (
        <div>
        <main className="main">
            <h1 className="page_title">My Blogs</h1>
            <div className="content" id="project">
            <ul id="project_list" className="project_list">
                {blogs.map((blog) => (
                <li key={blog.slug}>
                    <Link href={`/blog/${blog.slug}`}>
                    <BlogPreview
                        title={blog.title}
                        slug={blog.slug}
                        date={new Date(blog.date).toLocaleDateString()}
                        description={blog.description}
                        content={blog.content}
                        image={blog.image}
                        comments={blog.comments}
                    />
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </main>
        </div>
    );
    }
    


