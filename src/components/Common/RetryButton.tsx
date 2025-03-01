'use client';

export default function RetryButton() {
  return (
    <button 
      onClick={() => window.location.reload()} 
      className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
    >
      Tentar novamente
    </button>
  );
} 