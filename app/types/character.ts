export interface Character {
    id: string;
    name: string;
    title?: string;
    house?: string;
    description: string;
    imageUrl?: string;
    allegiances?: string[];
    alive?: boolean;
  }