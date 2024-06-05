const React = require('react');

module.exports = function Card({ animal }) {
  return (
    <div
      id={`carouselExampleControls_${animal.id}`}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {animal.Photos && animal.Photos.length > 0 ? (
          animal.Photos.map((photo, photoIndex) => (
            <div
              key={photoIndex}
              className={`carousel-item ${photoIndex === 0 ? 'active' : ''}`}
            >
              <img
                src={photo.img}
                className="d-block w-100"
                alt={animal.name}
                data-id={photo.id}
              />
            </div>
          ))
        ) : (
          <div>Фото пока нет</div>
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carouselExampleControls_${animal.id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carouselExampleControls_${animal.id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
