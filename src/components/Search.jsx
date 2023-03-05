import React from 'react'
import Button from './Button'

const Search = (props) => {
  return (
    <div className='SearchContainer'>
        <p className="searchheader">Search for the apartment you are looking for</p>

        <div className="searchFields">
            <input type="text" name="" id="" />

            <Button className='primarybutton' text='Search' />
        </div>
    </div>
  )
}

export default Search