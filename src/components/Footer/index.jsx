import { footerLinks } from '../../constants'

function Footer () {
  const date = new Date().getFullYear()

  return (
    <footer>
      <p>@copyright 2024 - {date}</p>
      <ul>
        {footerLinks.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.to}>{link.linkName}</a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
