import React from 'react';
import { Card } from '../ui/Card';
import { Select } from '../ui/Select';

const dotStyles = ['squares', 'circles', 'triangles', 'stars', 'lines', 'dots'];
const markerStyles = ['square', 'rounded', 'star', 'dotted-square'];

export function ShapesCard({ onChange }: { onChange: (data: any) => void }) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shapes</h2>
      <div className="space-y-4">
        <Select
          label="Dots Style"
          options={dotStyles}
          onChange={(value) => onChange({ dotsStyle: value })}
        />
        <Select
          label="Marker Style"
          options={markerStyles}
          onChange={(value) => onChange({ markerStyle: value })}
        />
      </div>
    </Card>
  );
}