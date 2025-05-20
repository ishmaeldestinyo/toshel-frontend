import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI as string;

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  slug: String,
  image: String,
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri);
  }
}

export async function GET() {
  await connectDB();
  const projects = await Project.find();
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  await connectDB();
  const { title, description, slug, image } = await request.json();
  const project = await Project.create({ title, description, slug, image });
  return NextResponse.json(project);
}