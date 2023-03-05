import React from 'react'
import Content from '../utilities/Content'

const Stat = () => {
  
  const stat = Content[1]

  const customers = stat.customers
  const awards = stat.awards
  const rating = stat.ratings
  console.log(rating)

  return (
    <div className='stat'>

      <div className='statItem'>
        <p className="statNumber">{customers.number}</p>
        <p className="statDetail">{customers.text}</p>
      </div>
      <div className='statItem'>
        <p className="statNumber">{awards.number}</p>
        <p className="statDetail">{awards.text}</p>
      </div>
      <div className='statItem'>
        <p className="statNumber">{rating.number}</p>
        <p className="statDetail">{rating.text}</p>
      </div>

    </div>
  )
}

export default Stat