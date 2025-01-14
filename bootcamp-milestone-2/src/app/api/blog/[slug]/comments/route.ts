import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  await connectDB();

  const body = await req.json();
  const { slug } = params;

  console.log("Extracted blogSlug:", slug);
  console.log("Extracted body:", body);

  // validate blog slug
  if (!slug || typeof slug != "string") {
    return NextResponse.json(`Invalid blog slug: ${slug}`, {
      status: 404,
    });
  }

  // validate body
  if (!body.user || !body.comment || !body.time) {
    return NextResponse.json("Invalid request.", { status: 404 });
  }

  const newComment = {
    user: body.user,
    comment: body.comment,
    time: new Date(),
  };

  const res = await Blog.updateOne(
    { slug },
    { $push: { comments: newComment } }
  );

  if (res.matchedCount === 0) {
    return NextResponse.json("Blog not found.", { status: 404 });
  } else {
    return NextResponse.json("Comment added successfully.", { status: 201 });
  }
}