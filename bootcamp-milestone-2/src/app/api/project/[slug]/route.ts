


import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

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
        const project = await Project.findOne({ slug }).lean().orFail();

        // Add the console.log here to inspect the project data, including comments
        console.log("Fetched project data:", JSON.stringify(project, null, 2));

        return NextResponse.json(project, { status: 200 });
    } catch (err) {
        console.error("Error fetching project:", err);
        return NextResponse.json("Project not found.", { status: 404 });
    }
}


// export async function GET(req: NextRequest) {
//     await connectDB();

//     // Extract slug from query parameters
//     const slug = req.nextUrl.searchParams.get('slug');

//     if (!slug) {
//         return NextResponse.json({ error: "Missing slug parameter." }, { status: 400 });
//     }

//     console.log(`Fetching project with slug: ${slug}`); // Log the slug

//     try {
//         // Fetch the project from the database
//         const project = await Project.findOne({ slug }).lean().orFail();

//         // Log the fetched project data for debugging
//         console.log("Fetched project data:", JSON.stringify(project, null, 2));

//         // Return the project data as a JSON response
//         return NextResponse.json(project, { status: 200 });
//     } catch (err) {
//         console.error("Error fetching project:", err);
//         return NextResponse.json({ error: "Project not found." }, { status: 404 });
//     }
// }

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;
    const { user, comment }: CommentBody = await req.json();

    // Validate the request body
    if (!isValid({ user, comment })) {
        return NextResponse.json({ error: 'Invalid comment data' }, { status: 400 });
    }

    try {
        const project = await Project.findOne({ slug }).orFail();

        project.comments.push({
            user: user,
            comment: comment,
            date: new Date(),
        });

        await project.save();
        return NextResponse.json({ message: "Comment posted successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

function isValid(body: CommentBody): boolean {
    if (!body || typeof body.comment !== 'string' || body.comment.trim() === '' || typeof body.user !== 'string') {  //hello
        return false;
    }
    return true;
}

// export async function POST(req: NextRequest) {
//     await connectDB();

//     // Extract slug from query parameters
//     const slug = req.nextUrl.searchParams.get('slug');

//     if (!slug) {
//         return NextResponse.json({ error: "Missing slug parameter." }, { status: 400 });
//     }

//     try {
//         // Parse the request body
//         const { user, comment }: CommentBody = await req.json();

//         // Validate the request body
//         if (!isValid({ user, comment })) {
//             return NextResponse.json({ error: "Invalid comment data" }, { status: 400 });
//         }

//         // Find the project by slug
//         const project = await Project.findOne({ slug }).orFail();

//         // Add the new comment to the project's comments array
//         project.comments.push({
//             user: user,
//             comment: comment,
//             date: new Date(),
//         });

//         // Save the updated project
//         await project.save();

//         // Return a success response
//         return NextResponse.json({ message: "Comment posted successfully!" }, { status: 200 });
//     } catch (error) {
//         console.error("Error:", error);
//         return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//     }
// }

// // Validation function for comment data
// function isValid(body: CommentBody): boolean {
//     if (
//         !body ||
//         typeof body.user !== 'string' ||
//         body.user.trim() === '' ||
//         typeof body.comment !== 'string' ||
//         body.comment.trim() === ''
//     ) {
//         return false;
//     }
//     return true;
// }