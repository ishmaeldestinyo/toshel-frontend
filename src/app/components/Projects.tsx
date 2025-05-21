import Image from "next/image";

// This is a server component, no "use client" needed
async function getProject() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/api/projects`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.project
}

export default async function ProjectDetailPage() {
  const project = await getProject();

  if (!project) {
    return <div className="p-6 text-center text-red-500">Project not found.</div>;
  }

  return (
    <main id="project" className="max-w-4xl mx-auto px-6 py-16">
     {project && project.map((item: any, key: any) => (
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