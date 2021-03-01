import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Pets() {
  const [pets, setPets] = useState({})
  const [newPet, setNewPet] = useState('')

  // @ts-ignore
  useEffect(async function () {
    const response = await axios.get(
      'https://tamagotchimm.herokuapp.com/api/Pets'
    )
    setPets(response.data)
  }, [])

  async function handleNewPet(event) {
    event.preventDefault()
    const response = await axios.post(
      'https://tamagotchimm.herokuapp.com/api/Pets',
      {
        name: newPet,
      }
    )

    const responseWhenReplacingPet = await axios.get(
      'https://tamagotchimm.herokuapp.com/api/Pets'
    )
    setPets(responseWhenReplacingPet.data)

    setNewPet('')
  }
  return (
    <>
      <ul>
        {Object.entries(pets).map(([petCode, petDetails]) => {
          return <li key={petDetails.id}>{petDetails.name}</li>
        })}
      </ul>
      <form onSubmit={handleNewPet}>
        <input
          type="text"
          placeholder="New Pets Name"
          value={newPet}
          onChange={function (event) {
            setNewPet(event.target.value)
          }}
        />
      </form>
    </>
  )
}
