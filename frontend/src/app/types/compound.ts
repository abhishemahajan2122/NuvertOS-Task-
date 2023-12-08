export interface Compound {
    id?: number;
    name: string;
    image: string;
    description: string;
  };
  
  export interface CompoundResponse {
    count: number;
    rows: Compound[];
  };