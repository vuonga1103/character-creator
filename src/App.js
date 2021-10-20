import React from 'react'

import CharacterEditor from './components/CharacterEditor'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          backgroundColor: 'hsl(195deg, 20%, 86%)',
          height: '40%',
          width: '100%',
          top: '60%',
          zIndex: -1,
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </>
  )
}

export default App
