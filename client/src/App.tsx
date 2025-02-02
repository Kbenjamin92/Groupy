import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

interface Users {
  id: number,
  firstName: string,
  lastName: string
}

const App = () => {
  const [users, setUsers] = useState<Users[]>([])

  useEffect(() => {
    try {
      axios.get('http://localhost:5001/')
      .then((response) => {
        setUsers(response.data)
      })
    } catch(error: any) {
        console.log(error.message)
    }
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Users List</h1>
        <ul>
          { users.map(({ id, firstName, lastName }) => (
            <li key={ id }>{ firstName } { lastName }</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
