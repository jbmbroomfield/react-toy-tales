import React, { useState, useEffect } from 'react';
import ToyCard from './ToyCard'
import { getToys, updateToy, deleteToy } from '../dbFunctions'

const ToyContainer = () => {


  const [toys, setToys] = useState([])

  useEffect(() => {
    getToys().then(json => setToys(json))
  })

  const handleLike = toy => {
    toy.likes += 1
    updateToy(toy)
  }

  const handleDonate = toyId => {
    deleteToy(toyId)
  }

  return (
    <div id="toy-collection">
      {toys.map(toy => <ToyCard key={toy.id} toy={toy} onLike={handleLike} onDonate={handleDonate} />)}
    </div>
  );
}

export default ToyContainer;
