import React from 'react'
import Button from './Button'
import Input from './Input'
import Globe from '../assets/images/global.svg'
import ApartmentType from '../assets/images/home-2.svg'
import Budget from '../assets/images/wallet.svg'

const Search = (props) => {
  return (
    <div className='SearchContainer'>
        <p className="searchheader">Search for the apartment you are looking for</p>

        <div className="searchFields">
            <Input placeholder='Location' icon={Globe} type='text' />
            <Input placeholder='Apartment Type' icon={ApartmentType} type='text' />
            <Input placeholder='Budget' icon={Budget} type='number' />

            <Button className='primarybutton' text='Search' />
        </div>
    </div>
  )
}

export default Search