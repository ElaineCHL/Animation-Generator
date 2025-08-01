import clsx from 'clsx';
import { useState, useCallback } from 'react';
import type { ChangeEvent, FC } from 'react';
import toast from 'react-hot-toast';
import api from '../lib/axios.js';

const ALLOWED_TYPES = [
  'application/pdf'
];

const FileUploader: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<'Uploaded' | 'Failed' | ''>('');
  const [error, setError] = useState<string>("");

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      alert('File type not supported. Please upload a PDF file.');
      return;
    }
    setFile(file);
    setUploadStatus('');
  }, []);

  const handleUpload = async () => {
    setError("");
    setUploading(true);

    if (!file) return;
    const { name, type } = file;
    
    // TODO: add upload file logic
    try {
      console.log(file);

      setUploadStatus('Uploaded');
      toast.success("Uploaded successfully.")
    } catch (err: unknown) {
      let errorMsg = 'An unknown error occurred.';

      if (err && typeof err === 'object' && 'response' in err) {
        const errorObj = err as { response?: { data?: { message?: string }, status?: number } };
        errorMsg = errorObj.response?.data?.message || `Server error: ${errorObj.response?.status}`;
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }
      setError(errorMsg);
      setUploadStatus('Failed');
      toast.error(errorMsg);
    }
    setUploading(false);
  };

  const removeFile = useCallback(() => {
    setFile(null);
    setUploadStatus('');
  }, []);

  return (
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
          disabled={uploading}
        />
      </div>

      {file && (
        <>
          <div className="mb-4 border rounded">
            <div className="flex justify-between items-center px-4 py-2">
              <div className="flex-grow">
                <div className="font-medium">{file.name}</div>
                <small className="text-gray-500">
                  <span className={clsx({
                    'text-green-600': uploadStatus === 'Uploaded',
                    'text-red-600': uploadStatus === 'Failed',
                    'text-gray-400': uploadStatus === '',
                  })}>
                    {uploadStatus || 'Pending'}
                    {uploadStatus === 'Uploaded' && ' ✓'}
                    {uploadStatus === 'Failed' && ' ✗'}
                  </span>
                </small>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center mb-4">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              onClick={handleUpload}
              disabled={uploading || !file}
            >
              <span>
                {uploading && (
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                )}
                Upload
              </span>
            </button>

            <button
              className="border border-red-500 text-red-600 px-4 py-2 rounded hover:bg-red-50 disabled:opacity-50"
              onClick={removeFile}
              disabled={uploading}
            >
              Clear
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;