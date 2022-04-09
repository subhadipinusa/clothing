
import Home from './routes/home/homes.component'
import {Routes, Route} from 'react-router-dom'
import Navigation from './Components/navigation/navigation.component'
import SignIn from './Components/sign-in/sign-in.componenet'

const Hello=() => {
  
  return (
    
    <h2>Hello Mr.Chanda </h2>
    
    
  )
}


const App = () => {
 
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='hello' element={<Hello/>}/>
        <Route path='signIn' element={<SignIn/>}/>
      </Route>
    </Routes>
      
    
  );
}

export default App;
