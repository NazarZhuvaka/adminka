import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
import HomePage from './pages/HomePage'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import NotFoundPage from './pages/NotFoundPage'
import AdminPage from './pages/AdminPage'
import Footer from './components/Footer'
import Header from './components/Header'
import { isLoginedUser } from './constants'

function App() {
  const { isLogin } = isLoginedUser;

  return (
    <Provider store={store}>
      <Router>
      <Header isLogin={isLogin} />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/signIn" Component={SignInForm} />
          <Route path="/signUp" Component={SignUpForm} />
          <Route path="/adminPage" Component={AdminPage} />
          <Route path="/*" Component={NotFoundPage} />
        </Routes>
      <Footer />
      </Router>
    </Provider>
  );
}

export default App;
