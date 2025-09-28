import { Link } from 'react-router-dom'

function Header (props) {
  return (
    <header>
      <Link to='/'>GuitarShop</Link>
      {props.isLogin ? (
        'yes'
      ) : (
        <ul>
          <li>
            <Link to='signIn'>Sign in</Link>
          </li>
          <li>
            <Link to='singUp'>Sign up</Link>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header
