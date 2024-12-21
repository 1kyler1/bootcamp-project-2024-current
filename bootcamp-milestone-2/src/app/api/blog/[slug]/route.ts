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