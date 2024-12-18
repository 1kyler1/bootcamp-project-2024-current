
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

export default async function Blog({ params: { slug } }: Props) {
  // const { slug } = params;

  const blog = await getBlog(slug);
  // if (blog?.comments) {
  //   // Log each comment to verify they're there
  //   blog.comments.forEach((comment: IComment) => console.log(comment));
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
            {blog?.comments && blog.comments.length > 0 ? (      // check if we have blog comments before getting them
              blog.comments.map((comment: IComment, index: number) => (
                <Comment key={index} comment={comment} />
              ))
            ) : (
              <p>Comments not found.</p>
            )}
            </div>
          </main>
          <footer>© 2023 Kylerrrrr Nord | All Rights Reserved</footer>
        </main>
      </div>
    );
  }







// export default async function Blog({ params }: Props) {
//   const { slug } = params
//   const blog = await getBlog(slug)

//   if (blog?.comments) {
//     // Log each comment to verify they're there
//     blog.comments.forEach((comment: IComment) => console.log(comment));
// }

//   return (
//     <div>
//       <main>
//         <main className="main">
//           <div className="title" id="blog">
//             <h1>{blog?.title}</h1>
//           </div>
//           <div className="image" id="blog">
//             <Image src={`/images/${blog?.image}`} alt="temp" height="500" width="500"/> 
//           </div>

//           <div className="content" id="blog">
//             <p>{blog?.content}</p>
//           </div>

//           <div className="comment" id="blog">
//             {blog.comments.map((comment: IComment, index: number) => (
//                 <Comment key={index} comment={comment} />
//             ))}
//           </div>
//         </main>
//         <footer>© 2023 Kyler Nord | All Rights Reserved</footer>
//       </main>
//     </div>
//   );
// }



  


    
