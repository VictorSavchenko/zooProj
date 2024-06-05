const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/card');

module.exports = function Animals({ login, animals, images }) {
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

              <label htmlFor="exampleInput2" className="form-label">Список фотографий</label>
              <input name="img" type="text" className="form-control shadow rounded" id="exampleInput5" />

              <label htmlFor="exampleInput3" className="form-label">Описание</label>
              <input name="text" type="text" className="form-control shadow rounded" id="exampleInput6" />

              <button type="submit" className="btn btn-primary shadow rounded">Создать</button>

              <h3 className="animalErrMsg" />
              <hr />
            </form>

            <div className="subscribe">
              {animals.map((animal) => (
                <>
                  <Card key={animal.id} images={animal.Photos} />
                  <li className="entryitem" id={animal.id} key={animal.id}>
                    <span>{animal.name} </span>
                    <a href={`/animals/${animal.id}`} className="btn btn-primary">{animal.name}</a>
                    <button data-animalid={animal.id} id={animal.id} type="button" className="btn btn-danger">удалить</button>
                  </li>
                </>
              ))}
            </div>
          </>
        ) : (

          <div>
            {animals.map((animal) => (
              <>
                <Card key={animal.id} images={animal.Photos} />
                <li className="entry-item pad-b-4" key={animal.id}>
                  {/* <img src={animal.img} alt="pet" /> */}
                  <span>{animal.name} </span>
                  <span>{animal.text} </span>
                </li>
              </>
            ))}
          </div>
        )}

      </div>
      <script defer src='/js/animal.js'/>
    </Layout>
  );
};
