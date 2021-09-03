import React from "react"

import Hero from '../components/hero/HeroContainer.js'
import MiddlePanel from "../components/middle_panel/MiddlePanel.js"

import "@fontsource/source-sans-pro"
import "normalize.css"

const IndexPage = () => {
  return (
    <main>
      <title>John Ketterer</title>
      <Hero />    
      <MiddlePanel />
         </main>
  )
}

export default IndexPage
