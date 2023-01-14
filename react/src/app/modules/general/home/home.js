import Banner from '../../../../components/banner/banner'
import Gallery from '../../../../components/gallery/gallery'

function Home(props) {
  return (
    <>
      <div className="home">
        <Banner />
        <Gallery data={props.data} />
      </div>
    </>
  )
}

export default Home
