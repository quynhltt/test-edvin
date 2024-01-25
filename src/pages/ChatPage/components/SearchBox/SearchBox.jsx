import React from 'react'
import InputField from '../../../../components/InputField/InputField';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  return (
    <div className='searchBox flex justify-around items-center'>
      <InputField />
      <SearchIcon />
    </div>
  )
}
