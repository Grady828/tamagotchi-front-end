import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Pets } from './pages/Pets'
export function PetPage() {
  return <p>This would be Pet 56</p>
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
