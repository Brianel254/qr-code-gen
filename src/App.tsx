import React from 'react';
import { QRCodeGenerator } from './components/QRCodeGenerator';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">QR Code Generator</h1>
        </div>
      </header>
      <main>
        <QRCodeGenerator />
      </main>
    </div>
  );
}

export default App;