import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to={'/'}>Pagina Inicial</Link></li>
          <li><Link to={'/microfrontend1'}>Microfrontend 1</Link></li>
          <li><Link to={'/microfrontend2'}>Microfrontend 2</Link></li>
        </ul>
      </nav>
    </>
  )
}