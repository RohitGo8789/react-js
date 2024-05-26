import LogIn from './components/LogIn'
import Profile from './components/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider>
     <h1>Context API Part-I</h1>
     <LogIn/>

     <Profile/>
    </UserContextProvider>
  )
}

export default App
