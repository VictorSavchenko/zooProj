const React = require('react');

module.exports = function Card({ animal, images }) {
  return (
    <div
      id={`carouselExampleControls_${animal.id}`}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* <div className="card" id={animal} className="carousel-inner"> */}
      <div className="carousel-inner">
        {images && images.length > 0 ? (
          images.map((img, photoIndex) => (
            <div key={photoIndex} className={`carousel-item ${photoIndex === 0 ? 'active' : ''}`}>
              <img
                src={img.img}
                className="d-block w-100"
                alt={animal.name}
                data-id={img.id}
              />
              {/* <button data-imgid={img.id} id={animal} type="button" className="btn btn-outline-dark">удалить</button> */}
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
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carouselExampleControls_${animal.id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
