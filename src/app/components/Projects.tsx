"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProjectDetailPage() {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/api/projects`);
        const data = await res.json();
        setProject(data.projects);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  if (!project?.length)
    return <div className="p-6 text-center text-red-500">Project not found.</div>;

  return (
    <main id="project" className="max-w-4xl mx-auto px-6 py-16">
      {project.map((item: any, key: any) => (
        <div key={key} className="mb-12">
          <h1 className="text-4xl font-bold mb-6">{item.slug}</h1>
          <Image
            src={item.image}
            alt={item.slug}
            width={800}
            height={500}
            className="rounded-xl mb-6 w-full h-auto object-cover"
          />
          <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
        </div>
      ))}
    </main>
  );
}
