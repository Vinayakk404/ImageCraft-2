import React from 'react'
import Image from './assets/logo.svg'
import CreatePost from './CreatePost'
import Home from './Home'
import {BrowserRouter, Link,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <>
  <BrowserRouter>

  <div className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
     <img src={Image} alt="image"  className="w-40 ml-3 "/>
     </Link>
    <Link to="/createPost"className="px-4 mr-4 rounded-md bg-[#6469ff] font-semibold py-2
     text-white">Create</Link>
    </div>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/CreatePost" element={<CreatePost/>}/>
      </Routes>
    </main>
    </BrowserRouter>
    </>
  )
}

export default App