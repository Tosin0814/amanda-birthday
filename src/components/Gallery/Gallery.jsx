import './Gallery.css'

export default function Gallery({ photos }) {
  return (
    <div id='imageCarousel' className='Gallery carousel slide' data-bs-ride="carousel">
        <div className="carousel-inner">
            {photos.map((photo, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="6000">
                <img src={photo.url} className="" alt="..."/>
            </div>
            ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}
