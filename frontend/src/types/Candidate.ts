interface Technology {
  name: string;
  isMainTech: boolean;
}

export default interface Candidate {
  id: string;
  city: string;
  experience: number;
  technologies: Technology[];
}
