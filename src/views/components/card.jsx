const React = require('react');

module.exports = function Card({ images }) {
  return (
    <div className="card">
      {images.map((img) => (
        <li className="photo" id={img.id} key={img.id}>
          <img src={img.img} alt="animal" />
          <button data-imgid={img.id} id={img.id} type="button" className="btn btn-danger">удалить</button>
        </li>
      ))}
    </div>
  );
};
