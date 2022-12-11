import './locality.css'

function Locality({ house }) {
  return (
    <div className="locality">
      <h2>{house.title}</h2>
      <h5>{house.location}</h5>
    </div>
  )
}

export default Locality
