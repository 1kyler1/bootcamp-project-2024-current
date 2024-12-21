// import { NextRequest, NextResponse } from 'next/server'
// import connectDB from "@/database/db"
// import projectSchema from "@/database/projectSchema"

// type IParams = {
// 		params: {
// 			slug: string
// 		}
// }

// // If { params } looks confusing, check the note below this code block
// export async function GET(req: NextRequest, { params }: IParams) {
//     await connectDB() // function from db.ts before
// 		const { slug } = params // another destructure

// 	   try {
// 	        const project = await projectSchema.findOne({ slug }).orFail()
// 	        return NextResponse.json(project)
// 	    } catch (err) {
// 	        return NextResponse.json('Project not found.', { status: 404 })
// 	    }
// }

// import { NextRequest, NextResponse } from 'next/server'
// import connectDB from "@/database/db"
// import projectSchema from "@/database/projectSchema"

// export async function GET(request: NextRequest, context: { params: { slug: string } }) {
//   await connectDB();
  
//   const { slug } = context.params; // Access params from context

//   try {
//     const project = await projectSchema.findOne({ slug }).lean().orFail();
//     return NextResponse.json(project, { status: 200 });
//   } catch (err) {
//     return NextResponse.json('Project not found.', { status: 404 });
//   }
// }


// import { NextRequest, NextResponse } from 'next/server'
// import connectDB from "@/database/db"
// import Project from "@/database/projectSchema"

// type IParams = {
// 		params: {
// 			slug: string
// 		}
// }



// export async function GET(req: NextRequest, { params }: IParams) {
// 	await connectDB();
// 	const { slug } = params;
  
// 	console.log(`Fetching project with slug: ${slug}`); // Log the slug
  
// 	try {
// 	  const project = await Project.findOne({ slug }).lean().orFail();
  
// 	  // Add the console.log here to inspect the blog data, including comments
// 	  console.log("Fetched project data:", JSON.stringify(project, null, 2));
  
// 	  return NextResponse.json(project, { status: 200 });
// 	} catch (err) {
// 	  console.error("Error fetching project:", err);
// 	  return NextResponse.json("project not found.", { status: 404 });
// 	}
//   }

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Project from '@/database/projectSchema';

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  console.log(`Fetching project with slug: ${slug}`); // Log the slug

  try {
    const project = await Project.findOne({ slug }).lean().orFail();

    // Log the fetched project data
    console.log('Fetched project data:', JSON.stringify(project, null, 2));

    return NextResponse.json(project, { status: 200 });
  } catch (err) {
    console.error('Error fetching project:', err);
    return NextResponse.json('Project not found.', { status: 404 });
  }
}