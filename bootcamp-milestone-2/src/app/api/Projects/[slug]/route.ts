import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import projectSchema from "@/database/projectSchema"

type IParams = {
		params: {
			slug: string
		}
}

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure

	   try {
	        const project = await projectSchema.findOne({ slug }).orFail()
	        return NextResponse.json(project)
	    } catch (err) {
	        return NextResponse.json('Project not found.', { status: 404 })
	    }
}