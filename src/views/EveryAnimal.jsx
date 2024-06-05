const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/Card');

module.exports = function EveryAnimal({ animal, images }) {
  return (
    <Layout>
      <div>

        <div className="subscribe1" id={animal.id}>
            <li className="entryitem1" id={animal.id} key={animal.id}>
              <Card key={animal.id} images={images} />
                <span> {animal.name} </span>
                <span> {animal.text} </span>
              <button data-everyid={animal.id} id={animal.id} type="button" className="btn btn-danger">delete</button>
              <button data-everyid={animal.id} id={animal.id} type="button" className="btn btn-info">edit</button>
            </li>
        </div>

      </div>
      <script defer src="/js/every.js" />
    </Layout>
  );
};
