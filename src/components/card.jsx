const React = require('react');

module.exports = function Card({ login, animal, images }) {
  return (
    <div>
      {login ? (
        <a className="card" id={animal}>
          {images.map((img) => (
            <li className="photo" id={img.id} key={img.id}>
              <img src={img.img} alt="animal" />
              <button data-imgid={img.id} id={animal} type="button" className="btn btn-outline-secondary">поменять фото</button>
              <button data-imgid={img.id} id={animal} type="button" className="btn btn-outline-dark">удалить фото</button>
            </li>
          ))}
        </a>

      ) : (
        <a className="card" id={animal}>
          {images.map((img) => (
            <li className="photo" id={img.id} key={img.id}>
              <img src={img.img} alt="animal" />
              <button data-imgid={img.id} id={animal} type="button" className="btn btn-outline-secondary">поменять фото</button>
              <button data-imgid={img.id} id={animal} type="button" className="btn btn-outline-dark">удалить фото</button>
            </li>
          ))}
        </a>
      )}
    </div>
  );
};
