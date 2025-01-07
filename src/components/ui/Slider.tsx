import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

interface SliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export function Slider({ label, min, max, value, onChange }: SliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="flex gap-2">
          <span className="text-sm text-gray-500">Min</span>
          <span className="text-sm font-medium text-gray-900">{value}</span>
          <span className="text-sm text-gray-500">Max</span>
        </div>
      </div>
      <SliderPrimitive.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={[value]}
        min={min}
        max={max}
        step={0.1}
        onValueChange={([val]) => onChange(val)}
      >
        <SliderPrimitive.Track className="bg-gray-200 relative grow rounded-full h-1">
          <SliderPrimitive.Range className="absolute bg-blue-600 rounded-full h-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </SliderPrimitive.Root>
    </div>
  );
}