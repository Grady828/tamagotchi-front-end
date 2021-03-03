import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom'
import { Pets } from './pages/Pets'
export function PetPage() {
  const [Pet, setPet] = useState({
    id: 0,
    name: 'string',
    birthday: '2021-03-01T01:58:27.945Z',
    happinessLevel: 0,
    hungerLevel: 0,
  })
  const history = useHistory()
  const params = useParams()

  useEffect(
    async function () {
      const response = await axios.get(
        `https://tamagotchimm.herokuapp.com/api/Pets/${params.id}`
      )
      setPet(response.data)
    },
    [params.id]
  )

  async function deletePet() {
    const response = await axios.delete(
      `https://tamagotchimm.herokuapp.com/api/Pets/${params.id}`
    )
    history.push('/')
  }

  async function petPlay() {
    const response = await axios.post(
      `https://tamagotchimm.herokuapp.com/api/Pets/${params.id}/Playtimes`
    )
    const updatePetPlay = await axios.get(
      `https://tamagotchimm.herokuapp.com/api/Pets/${params.id}`
    )
    setPet(updatePetPlay.data)
  }

  async function petFeed() {
    const response = await axios.post(
      `https://tamagotchimm.herokuapp.com/api/Pets/${params.id}/Feedings`
    )
    const updatePetFeed = await axios.get(
      `https://tamagotchimm.herokuapp.com/api/Pets/${params.id}`
    )
    setPet(updatePetFeed.data)
  }

  async function petScold() {
    const response = await axios.post(
      `https://tamagotchimm.herokuapp.com/api/Pets/${params.id}/Scoldings`
    )
    const updatePetScold = await axios.get(
      `https://tamagotchimm.herokuapp.com/api/Pets/${params.id}`
    )
    setPet(updatePetScold.data)
  }

  return (
    <div>
      <p> {Pet.name}</p>
      <p> This Pets Birthday is {Pet.birthday}</p>
      <p>Happiness Level: {Pet.happinessLevel} </p>
      <p>Hunger Level: {Pet.hungerLevel} </p>
      <button onClick={petPlay}>Play With Pet</button>
      <button onClick={petFeed}>Feed The Pet</button>
      <button onClick={petScold}>Scold The Pet</button>
      <button onClick={deletePet}>Delete This Pet</button>
      <button>
        <Link to="/">Home</Link>{' '}
      </button>
    </div>
  )
}

export function App() {
  return (
    <header>
      <header>
        <h1>Welcome to Your Tamagotchi Nest</h1>
        {/* <nav>
          <ul>
            <li>
              <button Link to="/">
                Go Home
              </button>
            </li>
            <li>
              <button Link to="/1">
                Page 1
              </button>
            </li>
            <li>
              <button Link to="/2">
                Page 2
              </button>
            </li>
          </ul>
        </nav> */}
      </header>
      <main>
        <nav></nav>
      </main>
      <Switch>
        <Route exact path="/">
          <Pets />
        </Route>
        <Route exact path="/pets/:id">
          <PetPage />
        </Route>
        <Route exact path="/2">
          Page 2
        </Route>
        <Route path="*">
          <h2> There is nothing on this page!</h2>
        </Route>
      </Switch>
    </header>
  )
}
