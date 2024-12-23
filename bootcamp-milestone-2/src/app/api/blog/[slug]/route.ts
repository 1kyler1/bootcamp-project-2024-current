


import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type IParams = {
    params: {
        slug: string;
    }
}

interface CommentBody {
    user: string;
    comment: string;
}

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;

    console.log(`Fetching project with slug: ${slug}`); // Log the slug

    try {
        const blog = await Blog.findOne({ slug }).lean().orFail();

        // Add the console.log here to inspect the project data, including comments
        console.log("Fetched project data:", JSON.stringify(blog, null, 2));

        return NextResponse.json(blog, { status: 200 });
    } catch (err) {
        console.error("Error fetching project:", err);
        return NextResponse.json("Project not found.", { status: 404 });
    }
}

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;
    const { user, comment }: CommentBody = await req.json();

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

function isValid(body: CommentBody): boolean {
    if (!body || typeof body.comment !== 'string' || body.comment.trim() === '' || typeof body.user !== 'string') {
        return false;
    }
    return true;
}




