import React from 'react';
import { Card } from '../ui/Card';
import { Formik, Form } from 'formik';
import { Input } from '../ui/Input';
import { Link, Mail, Text, Wand2 } from 'lucide-react';
import * as Yup from 'yup';

const tabs = [
  { id: 'link', icon: Link, label: 'Link' },
  { id: 'email', icon: Mail, label: 'Email' },
  { id: 'text', icon: Text, label: 'Text' }
];

const emailSchema = Yup.object().shape({
  address: Yup.string().email('Invalid email').required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required')
});

export function ContentCard({ onContentChange, onGenerate }: { 
  onContentChange: (data: any) => void;
  onGenerate: () => void;
}) {
  const [activeTab, setActiveTab] = React.useState('link');
  const [formData, setFormData] = React.useState({
    link: '',
    email: { address: '', subject: '', message: '' },
    text: ''
  });

  const handleChange = (type: string, value: any) => {
    setFormData(prev => ({ ...prev, [type]: value }));
    onContentChange({ type, content: { [type]: value } });
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Content</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === id ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {activeTab === 'link' && (
          <Input
            value={formData.link}
            placeholder="https://example.com"
            onChange={(e) => handleChange('link', e.target.value)}
          />
        )}

        {activeTab === 'email' && (
          <div className="space-y-4">
            <Input
              value={formData.email.address}
              placeholder="your@email.com"
              onChange={(e) => handleChange('email', { ...formData.email, address: e.target.value })}
            />
            <Input
              value={formData.email.subject}
              placeholder="Email subject"
              onChange={(e) => handleChange('email', { ...formData.email, subject: e.target.value })}
            />
            <textarea
              value={formData.email.message}
              className="w-full h-32 p-2 border rounded"
              placeholder="Email message"
              onChange={(e) => handleChange('email', { ...formData.email, message: e.target.value })}
            />
          </div>
        )}

        {activeTab === 'text' && (
          <textarea
            value={formData.text}
            className="w-full h-32 p-2 border rounded"
            placeholder="Enter your text"
            onChange={(e) => handleChange('text', e.target.value)}
          />
        )}

        <button
          onClick={onGenerate}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Wand2 className="w-5 h-5" />
          Generate QR Code
        </button>
      </div>
    </Card>
  );
}