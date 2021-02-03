import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DisplayListOfSeries = () => {
  const [series, setSeries] = useState([])

  const fetchSeries = async () => {
    const response = await axios.get(
      'https://content.viaplay.se/pc-se/serier/samtliga'
    )
    setSeries(
      response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    )
  }

  useEffect(() => {
    fetchSeries()
  }, [])

  let serieIndex = series.map((serie) => {
    return (
      <ul>
        {' '}
        <img key={serie.id} src={serie.content.images.landscape.url} />{' '}
      </ul>
    )
  })

  return (
    <div data-cy='serie-index' className='display-show'>
      {serieIndex}
    </div>
  )
}

export default DisplayListOfSeries
