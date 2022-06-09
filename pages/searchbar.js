import React from 'react';
import Link from 'next/link'
import { Input } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from 'react'
// import { Container } from './styles';
const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

function SearchBar({setcondition}) {
  // const history = useHistory();
  const [value, setValue] = useState('');
  // async function handleSubmit({ search }) {
    // history.push(`/search/${search}`);
  // }
  function search(condi){
    if(condi!=='')
    setcondition(condi)
    // setcondi(condi)
    
  }

  return (
    // <div onSubmit={handleSubmit}>
    //   
    // </div>
    <>
      {/* <Input
        type='text'
        autoComplete='off'
        name='search'
        placeholder='Searching for something?'
      />
      <button>
        <AiOutlineSearch size={30} />
      </button> */}

      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items, collections, and accounts"
          value={value}
          onChange={e => { setValue(e.currentTarget.value); }}
        />
      </div>
      {/* <button>
        
          <AiOutlineSearch size={30} onClick={() => search(value)}/>
      </button> */}
      <Link href={{pathname: '/search/'+value, query: { keyword: 'search' }}}>
          <button>
          <AiOutlineSearch size={30}/>
          </button>
      </Link>

    </>
  );
}

export default SearchBar;