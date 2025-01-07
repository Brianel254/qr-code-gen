import React from 'react';
import { Card } from '../ui/Card';
import { Select } from '../ui/Select';
import { Input } from '../ui/Input';
import { ColorPicker } from '../ui/ColorPicker';

const frameStyles = [
  'none',
  'bottom-text',
  'top-text',
  'bottom-rounded',
  'top-rounded',
  'custom-1',
  'custom-2'
];

const fonts = ['Arial', 'Helvetica', 'Times New Roman', 'Courier', 'Georgia'];

export function FramesCard({ onChange }: { onChange: (data: any) => void }) {
  const [frameStyle, setFrameStyle] = React.useState('none');

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Frames</h2>
      <div className="space-y-4">
        <Select
          label="Frame Style"
          options={frameStyles}
          onChange={(value) => {
            setFrameStyle(value);
            onChange({ style: value });
          }}
        />
        
        {frameStyle !== 'none' && (
          <>
            <Input
              label="Frame Text"
              placeholder="Enter frame text"
              onChange={(e) => onChange({ text: e.target.value })}
            />
            <ColorPicker
              label="Background Color"
              onChange={(color) => onChange({ backgroundColor: color })}
            />
            <ColorPicker
              label="Text Color"
              onChange={(color) => onChange({ textColor: color })}
            />
            <Select
              label="Font"
              options={fonts}
              onChange={(value) => onChange({ font: value })}
            />
          </>
        )}
      </div>
    </Card>
  );
}