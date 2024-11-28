import blogPreview from "@/components/blogPreview"
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
		// This checks that the GET request was successful
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
		// `` are a special way of allowing JS inside a string
		// Instead of "error: " + err, we can just do the above
		// it is simular to formated strings in python --> f"{err}"
	}
}  //helllo

export default async function Blog({ params }: Props) {
  const { slug } = params;
  const blog = await getBlog(slug);
    return (
      <div>
        <main>
          <main className="main">
            <div className="title" id="blog">
              <h1>{blog?.title}</h1>
            </div>
            <div className="image" id="blog">
              <Image src={`/images/${blog?.image}`} alt="temp" height="500" width="500"/> 
            </div>

            <div className="content" id="blog">
              <p>{blog?.content}</p>
            </div>

            <div className="comment" id="blog">
              {blog.comments.map((comment: IComment, index: number) => (
	                <Comment key={index} comment={comment} />
	            ))}
            </div>
          </main>
          <footer>© 2023 Kyler Nord | All Rights Reserved</footer>
        </main>
      </div>
    );
  }
