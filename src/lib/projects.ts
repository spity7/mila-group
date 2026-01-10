import { ProjectsResponse } from "@/types/api";

export async function getProjects(): Promise<ProjectsResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}projects`, {
    next: { revalidate: 60 }, // ISR (optional)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}
