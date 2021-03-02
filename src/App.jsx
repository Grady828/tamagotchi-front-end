import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import { Pets } from './pages/Pets'
export function PetPage() {
  const [Pet, setPet] = useState({
    id: 0,
    name: 'string',
    // birthday: '2021-03-01T01:58:27.945Z',
    // happinessLevel: 0,
    // hungerLevel: 0,
  })
  const params = useParams()
  

  useEffect(async function () {
    const response = await axios.get(
      `https://tamagotchimm.herokuapp.com/api/Pets/${params.id}`
    )
    setPet(response.data)
  }, [])
  return <p>This would be the details of Pet {Pet.id}</p>
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
