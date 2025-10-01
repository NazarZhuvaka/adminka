import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/signIn' Component={SignInForm}/>
        <Route path='/signUp' Component={SignUpForm}/>
        <Route path='/adminPage' Component={AdminPage}/>
        <Route path='/*' Component={NotFoundPage}/>
      </Routes>
    </Router>
  )
}

export default App
