import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from "./pages/homepage"
import ProfilePage from './pages/profilepage';
import SignupPage from './pages/signuppage';
import WorkoutList from './pages/workoutlist';
import * as authService from "./api/auth.service"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState()

  const userActive = async () => {
    if(authService.currentUser()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }

  useEffect(() => {
    userActive();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/workouts" element={isLoggedIn ? <WorkoutList/> : <HomePage/>}/>
          <Route path="/profile" element={isLoggedIn ? <ProfilePage/> : <HomePage/>}/>
          <Route path="/register" element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;