
import React from "react";
import Image from "next/image";
import Comment from "@/components/commentView";
import { IComment } from "@/database/blogSchema";

type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})
		
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
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
        <div className="image" id="blog">
          <Image src={`/images/${blog.image}`} alt="temp" height="500" width="500" />
        </div>
        <div className="content" id="blog">
          <p>{blog.content}</p>
        </div>
        <div className="comment" id="blog">
          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment: IComment, index: number) => (
              <Comment key={index} comment={comment} />
            ))
          ) : (
            <p>Comments not found.</p>
          )}
        </div>
      </main>
      <footer>© 2023 Kyler Nord | All Rights Reserved</footer>
    </div>
  );
}



