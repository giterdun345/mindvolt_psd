import React from "react"

import Hero from '../components/hero/HeroContainer.js'
import MiddlePanel from "../components/middle_panel/MiddlePanel.js"
import BottomPanel from "../components/cta_bottom_panel/bottomPanel.js"

import "@fontsource/source-sans-pro"
import "normalize.css"

const IndexPage = () => {
  return (
    <main>
      <title>John Ketterer</title>
      <Hero />    
      <MiddlePanel />
      <BottomPanel />
         </main>
  )
}

export default IndexPage
