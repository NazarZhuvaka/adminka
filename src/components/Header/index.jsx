import { Link } from 'react-router-dom'
import style from './Header.module.scss'

function Header (props) {
  return (
    <header className={style.header}>
      <Link to='/'>GuitarShop</Link>
      {props.isLogin ? (
        'yes'
      ) : (
        <ul>
          <li>
            <Link to='/signIn'>Sign in</Link>
          </li>
          <li>
            <Link to='/signUp'>Sign up</Link>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header
