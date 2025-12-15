export interface Service {
  _id: string;
  name: string;
  description: string;
}

export interface Project {
  _id: string;
  name: string;
  description: string;
  status: string;
  location: string;
  date: string;
  gallery: string[];
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ServicesResponse {
  services: Service[];
}

export interface ProjectsResponse {
  projects: Project[];
}
