const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/card');

module.exports = function EveryAnimal({ login, animal, images }) {
  return (
    <Layout>
      {login ? (

        <div>
          <div className="subscribe1" id={animal.id}>
            <div className="entryitem1" id={animal.id} key={animal.id}>
              <Card key={animal.id} login={login} animal={animal.id} images={images} />
              <span> {animal.name} </span>
              <span> {animal.text} </span>
              <button data-everyid={animal.id} id={animal.id} type="button" className="btn btn-outline-danger">удалить</button>
              <button data-everyid={animal.id} id={animal.id} type="button" className="btn btn-outline-info">редактировать</button>
              <button data-everyid={animal.id} id={animal.id} type="button" className="btn btn-outline-warning">добавить фото</button>
            </div>
          </div>
        </div>
      ) : (

        <div>
          <div className="subscribe1" id={animal.id}>
            <div className="entryitem1" id={animal.id} key={animal.id}>
              <Card key={animal.id} animal={animal.id} images={images} />
              <span> {animal.name} </span>
              <span> {animal.text} </span>
            </div>
          </div>
        </div>
      )}
      <script defer src="/js/every.js" />
      <script defer src="/js/del&change_img.js" />
      <link rel="stylesheet" href="/css/forms.css" />
      <link rel="stylesheet" href="/css/every.css" />

    </Layout>
  );
};
