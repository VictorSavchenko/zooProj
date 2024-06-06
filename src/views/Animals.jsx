const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/All');

module.exports = function Animals({ login, animals }) {
  return (
    <Layout login={login}>
      <div>
        <h2>Добрый день!</h2>
        <h3>Это наши животные:</h3>
        {login ? (
          <>

            <div className="form-container">
              <form className="animalForm">
                <div className="form-card">
                  <label htmlFor="exampleInput1" className="form-label">Название животного</label>
                  <input name="name" type="text" className="form-input" id="exampleInput4" />

                  <label htmlFor="exampleInput2" className="form-label">Фотографии</label>
                  <input name="img" type="text" className="form-input" id="exampleInput5" />

                  <label htmlFor="exampleInput3" className="form-label" id="example6">Описание</label>
                  <input name="text" type="text" className="form-input" id="exampleInput6" />

                  <button type="submit" className="form-button form-button-success">Создать</button>
                  <button type="button" className="form-button form-button-outline-success" id="photo">Добавить фотографию</button>
                  <h3 className="animalErrMsg" />
                </div>
              </form>
            </div>
            <div className="subscribe">
              {animals.map((animal, index) => (
                <div className="entryitem" id={animal.id} key={animal.id}>
                  <div key={index}>
                    <Card key={animal.id} animal={animal} images={animal.Photos} />
                    <a href={`/animals/${animal.id}`} className="btn btn-outline-info">{animal.name}</a>
                    <button data-animalid={animal.id} id={animal.id} type="button" className="btn btn-outline-danger">удалить</button>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </>
        ) : (

          <div className="subscribe">
            {animals.map((animal, index) => (
              <div className="entryitem" key={animal.id}>
                <div key={index}>
                  <Card className="card" key={animal.id} animal={animal} images={animal.Photos} />
                  <span className="h">{animal.name} </span>
                  <span className="h">{animal.text} </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      
      <script defer src="/js/animal.js" />
      <link rel="stylesheet" href="/css/forms.css" />
      <link rel="stylesheet" href="/css/animals.css" />
    </Layout>
  );
};
