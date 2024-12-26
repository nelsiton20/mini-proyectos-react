import './App.css'
import ConverterContainer from './components/ConverterContainer'
import Header from './components/Header'
import ResultsContainer from './components/ResultsContainer'
import { useState } from 'react'

function App() {
  const [condition, setCondition] = useState(false);

  return (
    <>
      <Header />
      <ConverterContainer condition={condition} setCondition={setCondition}/>
      <ResultsContainer />
    </>
  )
}

export default App
