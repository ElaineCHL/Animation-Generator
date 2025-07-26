import React, { useState } from 'react';

interface FormState {
  prompt: string;
  model: string;
}

interface UploadFormProps {
  onSubmit: (data: FormState) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<FormState>({
    prompt: '',
    model: 'gpt-4o',
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

    if (!formState.prompt || !formState.model) {
      setError('Please fill in all fields.');
      return;
    }
    setError(null);
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4 rounded">
      <div className="flex flex-row flex-wrap">
        <div className="mb-4 px-2 flex-1 min-w-[250px]">
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
            <option value="" disabled>-- Select a model --</option>
            <option value="gpt-4o">OpenAI GPT-4o</option>
            <option value="gpt-4.1">OpenAI GPT-4.1</option>
          </select>
        </div>

        <div className="mb-4 px-2 flex items-end">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded hover:bg-blue-700 px-4 py-2"
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
