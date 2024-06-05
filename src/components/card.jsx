const React = require('react');

module.exports = function Card({ animal, images }) {
  return (
    <a className="card" id={animal}>
      {images.map((img) => (
        <li className="photo" id={img.id} key={img.id}>
          <img src={img.img} alt="animal" />
          <button data-imgid={img.id} id={animal} type="button" className="btn btn-outline-dark">удалить</button>
        </li>
      ))}
    </a>
  );
};