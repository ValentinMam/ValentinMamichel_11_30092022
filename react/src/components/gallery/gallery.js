import Card from '../card/card'
import './gallery.css'

function Gallery(props) {
  return (
    <div className="gallery">
      <ul>
        {props.data.map((house) => {
          return <Card key={house.id} house={house} />
        })}
      </ul>
    </div>
  )
}

export default Gallery
