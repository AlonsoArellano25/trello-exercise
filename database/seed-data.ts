interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: lorem lorem lorem lorem lorem lorem lorem",
      status: "pending",
      createdAt: Date.now()
    },
    {
      description: "En progreso: lorem lorem lorem lorem lorem lorem lorem",
      status: "in-progress",
      createdAt: Date.now() - 1000000
    },
    {
      description: "Terminadas: lorem lorem lorem lorem lorem lorem lorem",
      status: "finished",
      createdAt: Date.now() - 200000
    }
  ]
};
