
// A single AudioContext is created and reused for performance.
let audioContext: AudioContext | null = null;

const initAudioContext = (): AudioContext | null => {
  if (audioContext) return audioContext;
  try {
    // Safari requires the `webkit` prefix.
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    audioContext = new AudioContext();
    return audioContext;
  } catch (e) {
    console.error("Web Audio API is not supported in this browser");
    return null;
  }
};

// Function to play the sound for a successful match.
export const playMatchSound = (isMuted: boolean) => {
  if (isMuted) return;
  const context = initAudioContext();
  if (!context) return;
  
  // Browsers may suspend the AudioContext after a period of inactivity.
  if (context.state === 'suspended') {
    context.resume();
  }

  const osc = context.createOscillator();
  const gain = context.createGain();
  
  osc.connect(gain);
  gain.connect(context.destination);
  
  const startTime = context.currentTime;
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.4, startTime + 0.01);
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, startTime);
  osc.frequency.exponentialRampToValueAtTime(1200, startTime + 0.1);
  
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.2);
  
  osc.start(startTime);
  osc.stop(startTime + 0.2);
};

// Function to play the sound for an incorrect match.
export const playMismatchSound = (isMuted: boolean) => {
   if (isMuted) return;
   const context = initAudioContext();
   if (!context) return;
   if (context.state === 'suspended') {
    context.resume();
  }
  
   const osc = context.createOscillator();
   const gain = context.createGain();
  
   osc.connect(gain);
   gain.connect(context.destination);
  
   const startTime = context.currentTime;
   gain.gain.setValueAtTime(0, startTime);
   gain.gain.linearRampToValueAtTime(0.3, startTime + 0.01);
  
   osc.type = 'sawtooth';
   osc.frequency.setValueAtTime(200, startTime);
   osc.frequency.exponentialRampToValueAtTime(100, startTime + 0.15);
  
   gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.2);
  
   osc.start(startTime);
   osc.stop(startTime + 0.2);
};

// Function to play the sound for winning the game.
export const playVictorySound = (isMuted: boolean) => {
  if (isMuted) return;
  const context = initAudioContext();
  if (!context) return;
  if (context.state === 'suspended') {
    context.resume();
  }
  
  // A C-major arpeggio for a cheerful victory sound.
  const notes = [523.25, 659.25, 783.99, 1046.50];
  const startTime = context.currentTime;
  
  notes.forEach((note, i) => {
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.connect(gain);
    gain.connect(context.destination);
    
    const noteStartTime = startTime + i * 0.12;
    gain.gain.setValueAtTime(0, noteStartTime);
    gain.gain.linearRampToValueAtTime(0.4, noteStartTime + 0.01);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(note, noteStartTime);

    gain.gain.exponentialRampToValueAtTime(0.0001, noteStartTime + 0.4);
    
    osc.start(noteStartTime);
    osc.stop(noteStartTime + 0.4);
  });
};
