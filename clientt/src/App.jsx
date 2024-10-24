import axios from "axios"
import { useState } from 'react'

import './App.css'

function App() {

  const base_url = 'https://hackathon-2024-be.vercel.app/routes/api/info'

  const [info, setInfo] = useState({
    website: '',
    message:''
  })

  const handleInput = (e) => {
    setInfo({...info, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const infoFormData = new FormData();
    infoFormData.append("website", info.website)
    infoFormData.append("message", info.message)

    axios({
      method: "post",
      url: `${base_url}/createInfo`,
      data: infoFormData,
      headers: { "Content-Type": "application/json" },
    });

  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label htmlFor="website">URL:</label>
        <input 
          type="text" 
          name="website" 
          id="website"
          value={info.website || ""} 
          onChange={handleInput} />
        <label htmlFor="message">message</label>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={info.message || ""}
          onChange={handleInput} />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
