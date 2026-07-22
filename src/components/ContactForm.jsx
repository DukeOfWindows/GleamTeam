import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BASIN_ENDPOINT = 'https://usebasin.com/f/42e0a3778184';

export default function ContactForm() {
  const navigate = useNavigate();
  const [filePreviews, setFilePreviews] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleFilePreview = (e) => {
    const files = Array.from(e.target.files);
    setFilePreviews(files);
  };

  const removeFile = (indexToRemove) => {
    setFilePreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // AJAX submit + client-side redirect: Basin's free plan ignores the _redirect
  // field (custom redirects are Starter+), so we submit in the background and
  // send the visitor to /thanks ourselves.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.target;
    const formData = new FormData(form);

    // Files: FormData picks up the file input automatically, but respect any
    // files the user removed from the preview list.
    formData.delete('attachments[]');
    filePreviews.forEach((file) => formData.append('attachments[]', file));

    try {
      const res = await fetch(BASIN_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        navigate('/thanks');
      } else {
        setError('Something went wrong sending your request. Please try again, or phone us on 022 436 7611.');
        setSubmitting(false);
      }
    } catch {
      setError('Something went wrong sending your request. Please check your connection and try again, or phone us on 022 436 7611.');
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-heading font-bold text-duke-dark text-center mb-2">
        Request a Free Quote
      </h2>
      <p className="text-center text-gray-600 text-sm mb-4">
        Let us know how we can help with your window cleaning around Wanaka, Hawea, Luggate and Tarras.
      </p>

      {/* Form Fields */}
      <label className="block text-sm font-medium text-gray-700">
        Name
        <input type="text" name="name" required className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke" />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Email
        <input type="email" name="email" required className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke" />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Address
        <input type="text" name="address" required className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke" />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Phone Number
        <input type="tel" name="phone" className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke" />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Message
        <textarea name="message" required rows="4" placeholder="Tell us what needs cleaning..." className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke" />
      </label>

      {/* File Upload */}
      <label className="block text-sm font-medium text-gray-700">
        Upload Photos or Files (optional)
        <input
          type="file"
          name="attachments[]"
          multiple
          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
          onChange={handleFilePreview}
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke"
        />
        <p className="text-xs text-gray-500 mt-1">Accepted: JPG, PNG, PDF, DOC. Max 5MB each.</p>
      </label>

      {/* File Previews */}
      {filePreviews.length > 0 && (
        <div className="mt-4 space-y-2">
          {filePreviews.map((file, index) => (
            <div key={index} className="text-sm text-gray-700 flex items-center gap-4">
              {file.type.startsWith('image/') && (
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index}`}
                  className="w-16 h-16 object-cover rounded border"
                />
              )}
              <span className="flex-1 break-words">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-red-600 text-xs font-semibold hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Honeypot */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

      {/* Promotional Opt-In */}
      <label className="flex items-start text-sm text-gray-700">
        <input
          type="checkbox"
          name="promoOptIn"
          defaultChecked
          className="mt-1 mr-2 border-gray-300 rounded text-duke focus:ring-duke"
        />
        <span>Would you like to receive promotional material from Gleam Team?</span>
      </label>

      {/* Error message */}
      {error && (
        <p className="text-sm text-red-600 text-center" role="alert">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="bg-duke-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-duke-dark transition-colors w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Send Request'}
      </button>
    </form>
  );
}
