import { Schema } from "mongoose";
import mongoose from "mongoose";

// typescript type (can also be an interface)
type Project = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    content: string; // for individual blog page
    image: string;
    comments: Comment[]; // array for comments
};


// mongoose schema 
const projectSchema = new Schema<Project>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		content: { type: String, required: true },
        image: { type: String, required: true },
})

// defining the collection and model
// const Project = mongoose.models["projects"] || mongoose.model('projects', projectSchema);
const Project = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default Project;