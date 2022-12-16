import {useContext} from 'react'
import AppContext from './AppContext.js'
import Login from "./Login"

export default function Favorite() {
    const data=useContext(AppContext)
    console.log(data.favoriteData)
  return (
    <>
    <div>Ur email</div>
    <h1>{data.favoriteData}</h1>
    <Login/>
    </>
  )
}
