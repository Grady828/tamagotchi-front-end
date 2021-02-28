import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export function App() {
  const [pets, setPets] = useState({})
  const [newPet, setNewPet] = useState('')

  useEffect(async function () {
    const response = await axios.get(
      'https://tamagotchimm.herokuapp.com/api/Pets'
    )
    setPets(response.data)
  }, [])

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
        <nav>
          <ul>
            {Object.entries(pets).map(([petCode, petDetails]) => {
              return <li key={petDetails.id}>{petDetails.name}</li>
            })}
          </ul>
          <form>
            <input
              type="text"
              placeholder="Make a new pet"
              value={newPet}
              onChange={function (event) {
                setNewPet(event.target.value)
              }}
            />
          </form>
        </nav>
      </main>
      {/* <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/1">
          Page 1
        </Route>
        <Route exact path="/2">
          Page 2
        </Route>
        <Route path="*">Not Found</Route>
      </Switch> */}
    </header>
  )
}
