import React from 'react';
import { ContentCard } from './content/ContentCard';
import { AppearanceCard } from './appearance/AppearanceCard';
import { ShapesCard } from './shapes/ShapesCard';
import { LogoCard } from './logo/LogoCard';
import { FramesCard } from './frames/FramesCard';
import { PreviewCard } from './preview/PreviewCard';
import type { QRCodeData, QRStyle, QRFrame } from '../types/qr';

export function QRCodeGenerator() {
  const [qrData, setQRData] = React.useState<QRCodeData>({ type: 'link', content: {} });
  const [style, setStyle] = React.useState<QRStyle>({
    backgroundColor: '#FFFFFF',
    dotsColor: '#000000',
    markerBorderColor: '#000000',
    markerCenterColor: '#000000',
    dotsStyle: 'squares',
    markerStyle: 'square',
    dotsSize: 0.5,
    logo: null
  });
  const [frame, setFrame] = React.useState<QRFrame>({ style: 'none' });
  const [isGenerated, setIsGenerated] = React.useState(false);

  const handleGenerate = () => {
    setIsGenerated(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-8">
        <div className="lg:col-span-3 space-y-4 sm:space-y-6">
          <ContentCard 
            onContentChange={setQRData} 
            onGenerate={handleGenerate}
          />
          <AppearanceCard onChange={(data) => setStyle({ ...style, ...data })} />
          <ShapesCard onChange={(data) => setStyle({ ...style, ...data })} />
          <LogoCard onChange={(file) => setStyle({ ...style, logo: file })} />
          <FramesCard onChange={setFrame} />
        </div>
        <div className="lg:col-span-2">
          <div className="sticky top-8">
            <PreviewCard 
              qrData={qrData} 
              style={style} 
              frame={frame}
              isGenerated={isGenerated}
            />
          </div>
        </div>
      </div>
    </div>
  );
}