import React, { useEffect } from 'react'
import Home from './pages/Home/Home.jsx'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import OtherCategory from './pages/Home/OtherCategory.jsx';
import { SearchCont } from './searchContext.jsx'
import SearchSection from './components/SearchingSection/SearchSection.jsx'
const App = () => {

  const navigate = useNavigate()

  useEffect(()=>{
     onAuthStateChanged(auth,async (user)=>{
        if(user)
        {
          console.log("Logged In");
          navigate('/')
        }
        else
        {
          console.log("logged out")
          navigate('/login');
        }
     })
  },[])
  // dependency array 

  return (
    <div >
      <SearchCont>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category/:catName' element={<OtherCategory/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/search' element={<SearchSection/>}></Route>
      </Routes>
      </SearchCont>
    </div>
  )
}

export default App
