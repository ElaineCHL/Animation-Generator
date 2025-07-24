import React, { useState } from 'react';

interface FormState {
  text: string;
  model: string;
}

const UploadForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    text: '',
    model: 'gpt-4o',
  });

  const [error, setError] = useState<string | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, text: e.target.value }));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, model: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formState.text || !formState.model) {
      setError('Please fill in all fields.');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto p-4 rounded">
      <div className="flex flex-row flex-wrap">
        <div className="mb-4 px-2 flex-1 min-w-[250px]">
          <label className="mb-1 block">Ask a question related to your document:</label>
          <input
            type="text"
            value={formState.text}
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
