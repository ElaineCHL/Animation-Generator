import React, { useState, type ChangeEvent } from 'react';
import { Util } from '../lib/Utils';

const ALLOWED_TYPES = ['application/pdf'];

interface FormState {
  file: File | null,
  prompt: string;
  model: string;
}

interface UploadFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

const UploadForm: React.FC<UploadFormProps> = ({ onSubmit, isLoading }) => {
  const [formState, setFormState] = useState<FormState>({
    file: null,
    prompt: '',
    model: 'openai/gpt-4o',
  });

  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError('File type not supported. Please upload a PDF file.');
      return;
    }
    setError(null);
    setFormState(prev => ({ ...prev, file: selectedFile }));
  };

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, prompt: e.target.value }));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, model: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Util.isEmptyString(formState.prompt) || !formState.prompt) {
      setError('Please enter prompt.');
      return;
    } else if (Util.isEmptyString(formState.model) || !formState.model) {
      setError('Please choose a model.');
      return;
    }

    const formData = new FormData();
    formData.append("model", formState.model);
    formData.append("prompt", formState.prompt);
    if (formState.file) { formData.append("file", formState.file); }
    
    setError(null);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="container max-w-4xl mx-auto rounded">

      <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded">
        <div className="mb-4">
          <label htmlFor="fileInput" className="block font-medium mb-2">
            Upload your Learning Material (PDF)
          </label>
          <input
            id="fileInput"
            type="file"
            className="block w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>

        {formState.file && (
          <>
            <div className="mb-4 border rounded">
              <div className="flex justify-between items-center px-4 py-2">
                <div className="flex-grow">
                  <div className="font-medium">{formState.file.name}</div>
                  <small className="text-gray-500">Selected ✓</small>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center mb-4">
              <button
                className="border border-red-500 text-red-600 px-4 py-1 rounded hover:bg-red-50"
                onClick={() => { setFormState(prev => ({ ...prev, file: null })); }}
              >
                Clear
              </button>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-row flex-wrap pt-10">
        <div className="mb-4 flex-1 min-w-[250px]">
          <label className="mb-1 block">Enter Prompt:</label>
          <input
            type="text"
            value={formState.prompt}
            onChange={handlePromptChange}
            className="w-full border p-2 rounded"
            placeholder='Enter a question related to your document.'
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
