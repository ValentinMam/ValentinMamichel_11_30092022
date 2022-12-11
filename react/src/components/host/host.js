import './host.css'

function Host({ host }) {
  return (
    <div className="host">
      <h5>{host.name}</h5>
      <img src={host.picture} alt="host" />
    </div>
  )
}

export default Host
