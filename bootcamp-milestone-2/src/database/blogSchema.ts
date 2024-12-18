import { Schema } from "mongoose";
import mongoose from "mongoose";

// typescript type (can also be an interface)
export type IComment = {
    user: string;
    comment: string;
    time: Date;
}
export type Blog = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    content: string; // for individual blog page
    image: string;
    comments: IComment[]; // array for comments
};


const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: true}, // Use `Date.now` for dynamic defaults
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    comments: {
        type: [
            {
                user: { type: String, required: true },
                comment: { type: String, required: true },
                time: { type: Date, required: true}, // Default to current date/time
            },
        ],
        default: [], // Ensure comments defaults to an empty array
    },
});

// defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model("blogs", blogSchema);

export default Blog;