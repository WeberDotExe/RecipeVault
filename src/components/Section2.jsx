import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { useNavigate } from "react-router-dom"
import "swiper/css"

const cuisines = [
  { name: "Italian", img: "italian.jpg" },
  { name: "Indian", img: "indian.jpg" },
  { name: "Chinese", img: "china.jpg" },
  { name: "Mexican", img: "mexican.jpg" },
  { name: "Japanese", img: "japan.jpg" },
  { name: "Thai", img: "thai.jpg" },
  { name: "American", img: "american.jpg" },
]
const Section2 = () => {
  const navigate = useNavigate()
  return (
        <section className='cuisine-section'>
            <h1 className="section-title">
            Discover Flavors From Around the World
            </h1>
                <div className="cuisine-slider-container">
             <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={2000}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            grabCursor={true}
        spaceBetween={24}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >

        {cuisines.map((cuisine, index) => (
          <SwiperSlide key={index}>
            <div className="cuisine-card" onClick={() => navigate(`/cuisine/${cuisine.name}`)}>
              <img src={cuisine.img} alt={cuisine.name} />
              <h3>{cuisine.name}</h3>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
        </div>

        </section>
  )
}

export default Section2