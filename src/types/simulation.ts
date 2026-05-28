export type SimulationStatus = 'idle' | 'uploading' | 'processing' | 'completed' | 'error';

export interface SimulationParams {
  clothingType: string;
  style: string;
  primaryColor: string;
  motif: string;
  userImage: string | null; // Base64 or object URL string
}

export interface SimulationResult {
  beforeImage: string;
  afterImage: string;
  logs: string[];
}
