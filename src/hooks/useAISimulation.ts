import { useState } from 'react';
import { SimulationStatus, SimulationParams, SimulationResult } from '@/types/simulation';
import { simulateAIGeneration } from '@/lib/mockApi';

const initialParams: SimulationParams = {
  clothingType: 'Boubou traditionnel',
  style: 'Moderne revisité',
  primaryColor: '#2563eb', // Default blue hex
  motif: 'Broderie col V',
  userImage: null,
};

export const useAISimulation = () => {
  const [status, setStatus] = useState<SimulationStatus>('idle');
  const [params, setParams] = useState<SimulationParams>(initialParams);
  const [logs, setLogs] = useState<string[]>([]);
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateParams = (newParams: Partial<SimulationParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  };

  const uploadUserImage = (base64Image: string) => {
    setStatus('uploading');
    setLogs([`[${new Date().toLocaleTimeString()}] Analyse et chargement de la photo utilisateur...`]);
    setTimeout(() => {
      setParams((prev) => ({ ...prev, userImage: base64Image }));
      setStatus('idle');
      setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] Photo chargée et prête pour la simulation.`]);
    }, 1500);
  };

  const startSimulation = async () => {
    if (!params.userImage) {
      setErrorMessage("Veuillez d'abord importer une photo.");
      setStatus('error');
      return;
    }

    try {
      setStatus('processing');
      setErrorMessage(null);
      setResult(null);
      setLogs([]);

      const simulationResult = await simulateAIGeneration(params, (updatedLogs) => {
        setLogs(updatedLogs);
      });

      setResult(simulationResult);
      setStatus('completed');
    } catch (error: any) {
      setErrorMessage(error.message || "Une erreur inconnue est survenue.");
      setStatus('error');
    }
  };

  const resetSimulation = () => {
    setStatus('idle');
    setParams((prev) => ({ ...prev, userImage: null }));
    setLogs([]);
    setResult(null);
    setErrorMessage(null);
  };

  return {
    status,
    params,
    logs,
    result,
    errorMessage,
    updateParams,
    uploadUserImage,
    startSimulation,
    resetSimulation,
  };
};
