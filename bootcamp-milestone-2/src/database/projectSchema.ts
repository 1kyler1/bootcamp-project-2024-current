import { Schema } from "mongoose";
import mongoose from "mongoose";


export type IComment = {
    user: string;
    comment: string;
    date: Date;
}
// typescript type (can also be an interface)
export type Project = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    content: string; // for individual blog page
    image: string;
    comments: [IComment]; // array for comments
};


// mongoose schema 
const projectSchema = new Schema<Project>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		content: { type: String, required: true },
        image: { type: String, required: true },
        comments: {
            type: [
                {
                    user: { type: String, required: true },
                    comment: { type: String, required: true },
                    date: { type: Date, required: true }, // Default to current date/time
                },
            ],
            default: [], // Ensure comments default to an empty array
        },
})

// defining the collection and model
// const Project = mongoose.models["projects"] || mongoose.model('projects', projectSchema);
const Project = mongoose.models['projects'] || mongoose.model("projects", projectSchema);

export default Project;