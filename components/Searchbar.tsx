"use client"

import { scrapeAndStoreProduct } from '@/lib/actions';
import { FormEvent, useState } from 'react'

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isValidProduct = (url: string) => {
    try {
      const parsedURL = new URL(url);
      const hostname = parsedURL.hostname;

      if (
        hostname.includes('openfoodfacts.')
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidProduct(searchPrompt);

    if (!isValidLink) {
      return alert("Invalid Link");
    }

    try {
      setIsLoading(true);

      const product = await scrapeAndStoreProduct(searchPrompt);

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <form className='flex flex-wrap gap-4 mt-12'
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder='Enter product link'
        className='searchbar-input'
      />
      <button 
      type='submit' 
      className='searchbar-btn'
      disabled={true}
      >
        {isLoading ? 'Searching...': 'Unavalable'}
      </button>
    </form>
  )
}

export default Searchbar