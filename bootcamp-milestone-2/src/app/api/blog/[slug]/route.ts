import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import Blog from "@/database/blogSchema"

type IParams = {
		params: {
			slug: string
		}
}

export async function GET(req: NextRequest, { params }: IParams) {
	await connectDB();
	const { slug } = params;
  
	console.log(`Fetching blog with slug: ${slug}`); // Log the slug
  
	try {
	  const blog = await Blog.findOne({ slug }).lean().orFail();
  
	  // Add the console.log here to inspect the blog data, including comments
	  console.log("Fetched blog data:", JSON.stringify(blog, null, 2));
  
	  return NextResponse.json(blog, { status: 200 });
	} catch (err) {
	  console.error("Error fetching blog:", err);
	  return NextResponse.json("Blog not found.", { status: 404 });
	}
  }

  export async function POST(req: NextRequest, { params }: IParams) {
	await connectDB();
	const { slug } = params;
	const { user, comment } = await req.json();
  
	// Validate the request body
	if (!isValid({ user, comment })) {
	  return NextResponse.json({ error: 'Invalid comment data' }, { status: 400 });
	}
  
	try {
	  const blog = await Blog.findOne({ slug }).orFail();
  
	  blog.comments.push({
		user: user,
		comment: comment,
		date: new Date(),
	  });
  
	  await blog.save();
	  return NextResponse.json({ message: "Comment posted successfully!" }, { status: 200 });
	} catch (error) {
	  console.error("Error:", error);
	  return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
  }
  
  function isValid(body: any) {
	if (!body || typeof body.comment !== 'string' || body.comment.trim() === '' || typeof body.user !== 'string') {
	  return false;
	}
	return true;
  }



