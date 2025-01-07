import React from 'react';
import { HexColorPicker } from 'react-colorful';
import * as Popover from '@radix-ui/react-popover';
import { Paintbrush } from 'lucide-react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:border-gray-300"
          >
            <div
              className="w-6 h-6 rounded-md border border-gray-200"
              style={{ backgroundColor: value }}
            />
            <Paintbrush className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">{value}</span>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="bg-white rounded-lg shadow-lg p-3 z-50">
            <HexColorPicker color={value} onChange={onChange} />
            <Popover.Arrow className="fill-white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}