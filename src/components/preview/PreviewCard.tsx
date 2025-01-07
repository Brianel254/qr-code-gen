import React from 'react';
import { Card } from '../ui/Card';
import QRCodeStyling from 'qr-code-styling';
import { Download, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PreviewCardProps {
  qrData: any;
  style: any;
  frame: any;
  isGenerated: boolean;
}

export function PreviewCard({ qrData, style, frame, isGenerated }: PreviewCardProps) {
  const qrRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(300);

  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth - 64; // Subtract padding
        setContainerWidth(Math.min(width, 400)); // Max width of 400px
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const [qrCode] = React.useState(new QRCodeStyling({
    width: containerWidth,
    height: containerWidth,
    margin: 20,
    image: style.logo ? URL.createObjectURL(style.logo) : undefined,
    dotsOptions: {
      color: style.dotsColor,
      type: style.dotsStyle
    },
    cornersSquareOptions: {
      color: style.markerBorderColor,
      type: style.markerStyle
    },
    cornersDotOptions: {
      color: style.markerCenterColor
    },
    backgroundOptions: {
      color: style.backgroundColor
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 10
    }
  }));

  React.useEffect(() => {
    if (qrRef.current && isGenerated) {
      qrRef.current.innerHTML = '';
      qrCode.append(qrRef.current);
    }
  }, [isGenerated, qrCode, containerWidth]);

  React.useEffect(() => {
    if (isGenerated) {
      qrCode.update({
        width: containerWidth,
        height: containerWidth,
        data: qrData.content[qrData.type] || '',
        image: style.logo ? URL.createObjectURL(style.logo) : undefined,
        dotsOptions: {
          color: style.dotsColor,
          type: style.dotsStyle
        },
        cornersSquareOptions: {
          color: style.markerBorderColor,
          type: style.markerStyle
        },
        cornersDotOptions: {
          color: style.markerCenterColor
        },
        backgroundOptions: {
          color: style.backgroundColor
        }
      });
    }
  }, [qrData, style, frame, isGenerated, containerWidth]);

  const handleDownload = async (format: 'png' | 'svg') => {
    if (format === 'png') {
      await qrCode.download({ extension: 'png' });
    } else {
      await qrCode.download({ extension: 'svg' });
    }
  };

  return (
    <Card className="p-6" ref={containerRef}>
      <h2 className="text-2xl font-bold mb-4">Preview</h2>
      {!isGenerated ? (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg">
          <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
          <p className="text-gray-600 text-center">
            Click "Generate QR Code" to see your QR code here
          </p>
        </div>
      ) : (
        <>
          <div className={cn(
            "bg-white rounded-lg p-8 mb-4",
            frame.style === 'none' && "border-2 border-current",
            "transition-all duration-200"
          )}>
            <div ref={qrRef} className="flex justify-center" />
            {frame.style !== 'none' && frame.text && (
              <div
                className="mt-4 p-4 text-center"
                style={{
                  backgroundColor: frame.backgroundColor || style.backgroundColor,
                  color: frame.textColor || style.dotsColor,
                  fontFamily: frame.font || 'Arial',
                  borderRadius: frame.style.includes('rounded') ? '0.5rem' : '0'
                }}
              >
                {frame.text}
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleDownload('png')}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <Download className="w-4 h-4" />
              PNG
            </button>
            <button
              onClick={() => handleDownload('svg')}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <Download className="w-4 h-4" />
              SVG
            </button>
          </div>
        </>
      )}
    </Card>
  );
}