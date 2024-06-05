const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/All');

module.exports = function Animals({ login, animals }) {
  return (
    <Layout>
      <div>
        <h2>Добрый день!</h2>
        <h3>Это наши животные:</h3>
        {login ? (
          <>
            <form className="animalForm">
              <label htmlFor="exampleInput1" className="form-label">Название животного</label>
              <input name="name" type="text" className="form-control shadow rounded" id="exampleInput4" />
              <label htmlFor="exampleInput2" className="form-label">Фотографии</label>
              <input name="img" type="text" className="form-control shadow rounded" id="exampleInput5" />
              <label htmlFor="exampleInput3" className="form-label">Описание</label>
              <input name="text" type="text" className="form-control shadow rounded" id="exampleInput6" />
              <button type="submit" className="btn btn-primary shadow rounded">Создать</button>
              <button type="button" className="btn btn-outline-primary" id="photo">Добавить фотографию</button>
              <h3 className="animalErrMsg" />
              <hr />
            </form>
            <div className="subscribe">
              {animals.map((animal, index) => (
                <div className="entryitem" id={animal.id} key={animal.id}>
                  <div key={index}>
                    <Card key={animal.id} animal={animal} images={animal.Photos} />
                    <a href={`/animals/${animal.id}`} className="btn btn-primary">{animal.name}</a>
                    <button data-animalid={animal.id} id={animal.id} type="button" className="btn btn-danger">удалить</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            {animals.map((animal, index) => (
              <div className="entry-item pad-b-4" key={animal.id}>
                <div key={index}>
                  <Card className="card" key={animal.id} animal={animal} images={animal.Photos} />
                  <span>{animal.name} </span>
                  <span>{animal.text} </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <script defer src="/js/animal.js" />
    </Layout>
  );
};
