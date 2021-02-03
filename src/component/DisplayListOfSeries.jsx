import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DisplayListOfSeries = () => {

  const [ series, setSeries] = useState([])

  const fetchSeries = async () => {
    const response = await axios.get('https://content.viaplay.se/pc-se/serier/samtliga')
    debugger
    setSeries(
      response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']

    )
    
  }
  useEffect(() => {
    fetchSeries()
  }, [])

  return (
    <div data-cy='serie-index' className='display-show'>



    </div>
     
  )
}

export default DisplayListOfSeries
