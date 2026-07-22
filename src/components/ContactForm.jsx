import React from 'react';

export default function ContactForm() {
  return (
    <form
      action="https://usebasin.com/f/42e0a3778184"
      method="POST"
      acceptCharset="UTF-8"
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

      {/* NOTE: file-upload field removed — Basin free plan doesn't support attachments.
          If Gleam Team upgrades later, restore the multipart encType and attachments[]
          input (see git history of this file for the original implementation). */}

      {/* Hidden Fields */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <input type="hidden" name="_redirect" value="https://gleamteam.co.nz/thanks" /> {/* TODO: confirm final domain */}
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
      {/* Submit */}
      <button
        type="submit"
        className="bg-duke-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-duke-dark transition-colors w-full"
      >
        Send Request
      </button>
    </form>
  );
}
