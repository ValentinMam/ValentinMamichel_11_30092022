import './housing.css'

import { useParams, Navigate } from 'react-router-dom'
import Carousel from '../../../../components/carousel/carousel'
import Locality from '../../../../components/locality/locality'
import Tags from '../../../../components/tags/tags'
import Host from '../../../../components/host/host'
import Stars from '../../../../components/stars/stars'
import Dropdown from '../../../../components/dropdown/dropdown'

function Housing(props) {
  const { id } = useParams()
  const filterLocation = props.data.filter((house) => {
    return house.id === id
  })

  if (filterLocation.length === 0) {
    // return <div>Pas de location</div>
    return <Navigate to="/*" />
  }

  return (
    <>
      {props.data
        .filter((house) => {
          return house.id === id
        })

        .map((house, idx) => {
          return (
            <div key={idx}>
              <Carousel imgList={house.pictures} />
              <main>
                <article>
                  <Locality house={house} />
                  <Tags tagList={house.tags} />
                </article>
                <article>
                  <Host host={house.host} />
                  <Stars rate={house.rating} />
                </article>
              </main>
              <section>
                <aside>
                  <Dropdown title="Description">
                    {<p>{house.description}</p>}
                  </Dropdown>
                </aside>
                <aside>
                  <Dropdown title="Équipements">
                    {
                      <ul>
                        {house.equipments.map((equipment, index) => {
                          return <li key={index}>{equipment}</li>
                        })}
                      </ul>
                    }
                  </Dropdown>
                </aside>
              </section>
            </div>
          )
        })}
    </>
  )
}

export default Housing
