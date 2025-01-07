import React from 'react';
import { Card } from '../ui/Card';
import { ColorPicker } from '../ui/ColorPicker';
import { Slider } from '../ui/Slider';
import { Edit } from 'lucide-react';

export function AppearanceCard({ onChange }: { onChange: (data: any) => void }) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Appearance</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <ColorPicker
            label="Background Color"
            icon={<Edit className="w-4 h-4" />}
            onChange={(color) => onChange({ backgroundColor: color })}
          />
        </div>
        <div className="flex items-center gap-2">
          <ColorPicker
            label="Dots Color"
            icon={<Edit className="w-4 h-4" />}
            onChange={(color) => onChange({ dotsColor: color })}
          />
        </div>
        <div className="flex items-center gap-2">
          <ColorPicker
            label="Marker border color"
            icon={<Edit className="w-4 h-4" />}
            onChange={(color) => onChange({ markerBorderColor: color })}
          />
        </div>
        <div className="flex items-center gap-2">
          <ColorPicker
            label="Marker center color"
            icon={<Edit className="w-4 h-4" />}
            onChange={(color) => onChange({ markerCenterColor: color })}
          />
        </div>
        <Slider
          label="Dots Size"
          min={0.1}
          max={1}
          step={0.1}
          value={0.5}
          onChange={(value) => onChange({ dotsSize: value })}
        />
      </div>
    </Card>
  );
}