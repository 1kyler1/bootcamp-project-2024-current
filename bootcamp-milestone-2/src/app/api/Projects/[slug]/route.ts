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

import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import projectSchema from "@/database/projectSchema"

export async function GET(request: NextRequest, context: { params: { slug: string } }) {
  await connectDB();
  
  const { slug } = context.params; // Access params from context

  try {
    const project = await projectSchema.findOne({ slug }).lean().orFail();
    return NextResponse.json(project, { status: 200 });
  } catch (err) {
    return NextResponse.json('Project not found.', { status: 404 });
  }
}