import React, { useState } from 'react';
import { Util } from '../lib/Utils';

interface FormState {
  prompt: string;
  model: string;
}

interface UploadFormProps {
  onSubmit: (data: FormState) => void;
  isLoading: boolean;
}

const UploadForm: React.FC<UploadFormProps> = ({ onSubmit, isLoading }) => {
  const [formState, setFormState] = useState<FormState>({
    prompt: '',
    model: 'openai/gpt-4o',
  });

  const [error, setError] = useState<string | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, prompt: e.target.value }));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, model: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Util.isEmptyString(formState.prompt) || !formState.prompt) {
      setError('Please enter prompt.');
      return;
    } else if (Util.isEmptyString(formState.model) || !formState.model) {
      setError('Please choose a model.');
      return;
    }
    setError(null);
    onSubmit(formState);
  };

  return (
<form onSubmit={handleSubmit} className="container max-w-4xl mx-auto pt-10 rounded">      <div className="flex flex-row flex-wrap">
        <div className="mb-4 flex-1 min-w-[250px]">
          <label className="mb-1 block">Ask a question related to your document:</label>
          <input
            type="text"
            value={formState.prompt}
            onChange={handleTextChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4 px-2 flex-1 max-w-[200px]">
          <label className="mb-1 block">Model:</label>
          <select
            value={formState.model}
            onChange={handleModelChange}
            className="w-full border p-2 rounded"
            required
          >
            <option disabled>-- Select a model --</option>
            <option value="openai/gpt-4o">OpenAI GPT-4o</option>
            <option value="openai/gpt-5" disabled>OpenAI GPT-5</option>
          </select>
        </div>

        <div className="mb-4 flex items-end">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white rounded hover:bg-blue-700 px-4 py-2 disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
          >
            Submit
          </button>
        </div>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
    </form>
  );
};

export default UploadForm;
