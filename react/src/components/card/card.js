import { NavLink } from 'react-router-dom'
import './card.css'

function Card({ house }) {
  return (
    <li className="card">
      <NavLink to={`housing/${house.id}`}>
        <div className="overlay">
          <img src={house.cover} alt="location" />
          <h4>{house.title}</h4>
        </div>
      </NavLink>
    </li>
  )
}

export default Card
