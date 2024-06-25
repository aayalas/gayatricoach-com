"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const NewsletterSignUpForm = () => {
  const t = useTranslations('News');

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    const res = await fetch('/api/listmonk/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, list_id: 1 }), // Change list_id as needed
    });

    const data = await res.json();

    if (res.status === 200) {
      setMessage('Subscribed successfully!');
    } else {
      setMessage(`Subscription failed: ${data.message}`);
    }
  };

  return (
    <form onSubmit={handleSubscribe}
      className="w-full max-w-md mx-auto"
    >
        {message && <p>{message}</p>}
        {/* <h1 className="mb-4 text-md font-bold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Subscribe</h1>    */}
        <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={t('pholder')} required />
                <button type="submit" className="text-gray-900 absolute right-2.5 bottom-2.5 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t('button')}</button>
          </div>
        <div className="mx-auto max-w-screen-sm text-sm text-left sm:text-center text-white newsletter-form-footer dark:text-white">{t('p1')} <a href="/policy" className="font-medium text-white dark:text-white underline hover:underline">{t('p2')}</a></div>
    </form>    
  );
};

export default NewsletterSignUpForm;