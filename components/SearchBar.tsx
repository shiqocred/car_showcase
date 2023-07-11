"use client";

import React, {useState} from 'react';

import SearchManufacturer from "./SearchManufacturer";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({otherClasses}: {otherClasses: string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

const SearchBar = ({setManufacturer, setModel}: any) => {
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === '' && searchModel === '') {
      return alert('fill field!');
    }

  setManufacturer(searchManufacturer);
  setModel(searchModel);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image 
          src="/model-icon.png"
          alt="car model"
          width={28}
          height={28}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input type="text" name="model" value={searchModel} onChange={(e) => setSearchModel(e.target.value)} placeholder="Tiguan" className='searchbar__input' />
        <SearchButton otherClasses='sm:hidden' />
      </div>
        <SearchButton otherClasses='sm-max:hidden' />
    </form>
  )
}

export default SearchBar