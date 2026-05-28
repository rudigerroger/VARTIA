import { SimulationParams, SimulationResult } from '@/types/simulation';

// Helper to translate color name/hex or get a nice color gradient for the SVG
const getColorGradients = (color: string) => {
  const c = color.toLowerCase();
  if (c.includes('bleu') || c.includes('blue') || c === '#2563eb') {
    return { primary: '#1e40af', secondary: '#3b82f6', light: '#93c5fd' };
  }
  if (c.includes('vert') || c.includes('green') || c === '#10b981') {
    return { primary: '#065f46', secondary: '#10b981', light: '#a7f3d0' };
  }
  if (c.includes('orange') || c === '#f97316') {
    return { primary: '#9a3412', secondary: '#f97316', light: '#ffedd5' };
  }
  if (c.includes('jaune') || c.includes('yellow') || c === '#eab308') {
    return { primary: '#854d0e', secondary: '#eab308', light: '#fef9c3' };
  }
  if (c.includes('violet') || c.includes('purple') || c === '#8b5cf6') {
    return { primary: '#5b21b6', secondary: '#8b5cf6', light: '#ddd6fe' };
  }
  if (c.includes('rose') || c.includes('pink') || c === '#ec4899') {
    return { primary: '#9d174d', secondary: '#ec4899', light: '#fbcfe8' };
  }
  return { primary: '#1e293b', secondary: '#64748b', light: '#cbd5e1' };
};

// Generates a beautiful vector SVG based on user clothing options, returns base64 string
export const generateClothingSvg = (params: SimulationParams): string => {
  const grads = getColorGradients(params.primaryColor);
  const { clothingType, style, motif } = params;

  // Let's create a beautiful dynamic SVG representing a stylized fashion silhouette with specific patterns
  let clothingShape = '';
  let patternDecorations = '';

  if (clothingType.toLowerCase().includes('boubou')) {
    // Large, flowing shape
    clothingShape = `
      <!-- Boubou Robe -->
      <path d="M 120 180 L 80 220 L 60 320 L 100 325 L 115 480 L 285 480 L 300 325 L 340 320 L 320 220 L 280 180 Z" fill="${grads.primary}" stroke="${grads.secondary}" stroke-width="3" />
      <path d="M 140 180 L 125 320 L 135 480" fill="none" stroke="${grads.light}" stroke-width="1.5" stroke-dasharray="4,4" />
      <path d="M 260 180 L 275 320 L 265 480" fill="none" stroke="${grads.light}" stroke-width="1.5" stroke-dasharray="4,4" />
    `;
  } else if (clothingType.toLowerCase().includes('robe') || clothingType.toLowerCase().includes('dress')) {
    // Fitted bodice and flared dress
    clothingShape = `
      <!-- Flared Robe Wax -->
      <path d="M 150 180 L 130 250 L 110 320 L 50 480 L 350 480 L 290 320 L 270 250 L 250 180 Z" fill="${grads.primary}" stroke="${grads.secondary}" stroke-width="3" />
      <path d="M 150 250 C 170 280, 230 280, 250 250" fill="none" stroke="${grads.light}" stroke-width="2" />
    `;
  } else if (clothingType.toLowerCase().includes('agbada')) {
    // Massive wide sleeve structure
    clothingShape = `
      <!-- Agbada Wide Robe -->
      <path d="M 130 180 L 40 200 L 20 380 L 95 385 L 105 480 L 295 480 L 305 385 L 380 380 L 360 200 L 270 180 Z" fill="${grads.primary}" stroke="${grads.secondary}" stroke-width="3" />
      <!-- Inner drape lines -->
      <path d="M 130 180 C 150 350, 250 350, 270 180" fill="none" stroke="${grads.secondary}" stroke-width="2" />
    `;
  } else {
    // Standard ensemble / suit
    clothingShape = `
      <!-- Ensemble Top & Pants -->
      <path d="M 130 180 L 90 200 L 95 300 L 140 310 L 135 480 L 185 480 L 200 350 L 215 480 L 265 480 L 260 310 L 305 300 L 310 200 L 270 180 Z" fill="${grads.primary}" stroke="${grads.secondary}" stroke-width="3" />
      <path d="M 95 300 L 305 300" stroke="${grads.light}" stroke-width="2" />
    `;
  }

  // Add motif decorations
  if (motif.toLowerCase().includes('col v') || motif.toLowerCase().includes('v-neck')) {
    patternDecorations = `
      <!-- Col en V Embroidery -->
      <path d="M 170 180 L 200 230 L 230 180" fill="none" stroke="${grads.light}" stroke-width="4" stroke-linecap="round" />
      <path d="M 160 180 L 200 245 L 240 180" fill="none" stroke="${grads.secondary}" stroke-width="2" stroke-linecap="round" />
      <circle cx="200" cy="260" r="4" fill="${grads.light}" />
      <circle cx="200" cy="275" r="3" fill="${grads.light}" />
    `;
  } else if (motif.toLowerCase().includes('broderie') || motif.toLowerCase().includes('embroidery')) {
    patternDecorations = `
      <!-- Center embroidery panel -->
      <rect x="185" y="190" width="30" height="150" rx="15" fill="${grads.light}" opacity="0.25" stroke="${grads.light}" stroke-width="2" />
      <path d="M 200 200 L 200 330" stroke="${grads.light}" stroke-width="1.5" stroke-dasharray="2,2" />
      <circle cx="200" cy="215" r="6" fill="none" stroke="${grads.light}" stroke-width="2" />
      <circle cx="200" cy="250" r="6" fill="none" stroke="${grads.light}" stroke-width="2" />
      <circle cx="200" cy="285" r="6" fill="none" stroke="${grads.light}" stroke-width="2" />
      <circle cx="200" cy="320" r="6" fill="none" stroke="${grads.light}" stroke-width="2" />
    `;
  } else {
    // Geometric / stripes / default
    patternDecorations = `
      <!-- Geometric motifs -->
      <line x1="100" y1="260" x2="300" y2="260" stroke="${grads.light}" stroke-width="2" opacity="0.8" />
      <line x1="110" y1="360" x2="290" y2="360" stroke="${grads.light}" stroke-width="2" opacity="0.8" />
      <polygon points="190,250 200,235 210,250" fill="${grads.light}" />
      <polygon points="190,350 200,335 210,350" fill="${grads.light}" />
      <!-- Small patterns -->
      <circle cx="150" cy="220" r="3" fill="${grads.light}" />
      <circle cx="250" cy="220" r="3" fill="${grads.light}" />
      <circle cx="140" cy="420" r="3" fill="${grads.light}" />
      <circle cx="260" cy="420" r="3" fill="${grads.light}" />
    `;
  }

  const svgStr = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
      <!-- Background -->
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0a1738" />
          <stop offset="100%" stop-color="#03081e" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="400" height="500" fill="url(#bgGrad)" rx="16" />
      
      <!-- Grid pattern overlay -->
      <g opacity="0.08">
        <path d="M 0,50 L 400,50 M 0,100 L 400,100 M 0,150 L 400,150 M 0,200 L 400,200 M 0,250 L 400,250 M 0,300 L 400,300 M 0,350 L 400,350 M 0,400 L 400,400 M 0,450 L 400,450" stroke="#ffffff" stroke-width="1" />
        <path d="M 50,0 L 50,500 M 100,0 L 100,500 M 150,0 L 150,500 M 200,0 L 200,500 M 250,0 L 250,500 M 300,0 L 300,500 M 350,0 L 350,500" stroke="#ffffff" stroke-width="1" />
      </g>
      
      <!-- Stylized Human Body Silhouette -->
      <g opacity="0.3">
        <!-- Head -->
        <circle cx="200" cy="90" r="30" fill="none" stroke="#64748b" stroke-width="2" />
        <!-- Neck -->
        <line x1="200" y1="120" x2="200" y2="140" stroke="#64748b" stroke-width="2" />
        <!-- Shoulders -->
        <line x1="130" y1="140" x2="270" y2="140" stroke="#64748b" stroke-width="2" />
        <!-- Arms -->
        <path d="M 130 140 L 90 220 L 70 300" fill="none" stroke="#64748b" stroke-width="2" />
        <path d="M 270 140 L 310 220 L 330 300" fill="none" stroke="#64748b" stroke-width="2" />
        <!-- Torso & Legs -->
        <path d="M 160 140 L 155 300 L 165 480" fill="none" stroke="#64748b" stroke-width="2" />
        <path d="M 240 140 L 245 300 L 235 480" fill="none" stroke="#64748b" stroke-width="2" />
      </g>
      
      <!-- AI Generated Clothing Overlay -->
      <g>
        ${clothingShape}
        ${patternDecorations}
      </g>
      
      <!-- Hologram Glow Lines -->
      <path d="M 80 180 L 120 180 M 280 180 L 320 180" stroke="#00f2fe" stroke-width="2" filter="url(#glow)" />
      <circle cx="200" cy="90" r="3" fill="#00f2fe" filter="url(#glow)" />
      
      <!-- Text details -->
      <rect x="25" y="25" width="120" height="24" rx="12" fill="rgba(0, 242, 254, 0.15)" stroke="rgba(0, 242, 254, 0.4)" stroke-width="1" />
      <text x="35" y="41" fill="#00f2fe" font-family="monospace" font-size="10" font-weight="bold">SIMULATION IA</text>
      
      <rect x="280" y="25" width="95" height="24" rx="12" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
      <text x="290" y="41" fill="#cbd5e1" font-family="monospace" font-size="9" font-weight="bold">${style.toUpperCase()}</text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgStr)))}`;
};

// Simulation delay function
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const simulateAIGeneration = async (
  params: SimulationParams,
  onLogUpdate: (logs: string[]) => void
): Promise<SimulationResult> => {
  const currentLogs: string[] = [];

  const addLog = (message: string) => {
    currentLogs.push(`[${new Date().toLocaleTimeString()}] ${message}`);
    onLogUpdate([...currentLogs]);
  };

  // 1. Initializing upload state
  addLog("Initialisation de la connexion sécurisée avec le serveur de calcul IA...");
  await delay(1000);
  
  if (!params.userImage) {
    addLog("ERREUR : Aucune image utilisateur fournie.");
    throw new Error("L'image de l'utilisateur est manquante.");
  }
  
  addLog("Téléchargement de l'image source vers le cloud Vartia...");
  await delay(1200);

  // 2. Processing state
  addLog("Analyse morphologique de la silhouette...");
  await delay(1500);
  
  addLog("Détection des repères corporels (pose estimation : 33 points)...");
  await delay(1000);
  
  // Future AI backend integration here:
  // Connect API endpoint e.g. POST /api/generate with params (clothingType, style, primaryColor, motif, userImage)
  
  addLog(`Sélection du modèle 3D : ${params.clothingType}...`);
  await delay(1200);
  
  addLog(`Ajustement du style de couture : ${params.style}...`);
  await delay(1000);
  
  addLog(`Génération de la texture. Couleur principale : ${params.primaryColor}...`);
  await delay(1400);
  
  addLog(`Application des motifs de broderie : ${params.motif}...`);
  await delay(1100);
  
  addLog("Calcul des ombres, du pliage de tissu et de l'intégration lumineuse...");
  await delay(1500);

  // Simulate potential random error for robustness test (e.g. if color is pink or style has special text)
  if (params.motif.toLowerCase().includes('erreur')) {
    addLog("ERREUR CRITIQUE : Défaillance de la génération de motif. Tissu non reconnu.");
    throw new Error("Le motif sélectionné a provoqué une erreur de rendu.");
  }

  addLog("Optimisation finale de l'image (Super Résolution IA)...");
  await delay(800);
  
  addLog("Simulation complétée avec succès !");

  const generatedImage = generateClothingSvg(params);

  return {
    beforeImage: params.userImage,
    afterImage: generatedImage,
    logs: currentLogs,
  };
};
