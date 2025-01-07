import React from 'react';
import { Card } from '../ui/Card';
import { useDropzone } from 'react-dropzone';
import { Image, X } from 'lucide-react';

export function LogoCard({ onChange }: { onChange: (file: File | null) => void }) {
  const [file, setFile] = React.useState<File | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg']
    },
    maxFiles: 1,
    onDrop: (files) => {
      const file = files[0];
      setFile(file);
      onChange(file);
    }
  });

  const removeFile = () => {
    setFile(null);
    onChange(null);
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Logo</h2>
      {file ? (
        <div className="relative">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <img
              src={URL.createObjectURL(file)}
              alt="Logo preview"
              className="w-12 h-12 object-contain"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">{file.name}</p>
              <p className="text-sm text-gray-500">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
            <button
              onClick={removeFile}
              className="p-1 hover:bg-gray-200 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400"
        >
          <input {...getInputProps()} />
          <Image className="w-8 h-8 mx-auto mb-2 text-gray-400" />
          <p className="text-sm text-gray-600">
            Drag & drop a logo here, or click to select
          </p>
        </div>
      )}
    </Card>
  );
}