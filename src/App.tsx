import { useState } from 'react'
import Home from './components/Home'
import Thanks from './components/Thanks'
import './App.css'

function App() {
  const [email, setEmail] = useState<string>('')
  const [home, setHome] = useState<boolean>(true)

  return (
    <>
    <main className='w-full min-h-[99svh] m-auto bg-white md:min-h-0 md:w-fit md:h-auto md:mt-16 md:rounded-3xl'>
      {home
        ? <Home email={email} setEmail={setEmail} setHome={setHome} />
        : <Thanks email={email} setHome={setHome}/>
      }
    </main>
    </>
  )
}

export default App
