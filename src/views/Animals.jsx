const React = require('react');
const Layout = require('./Layout');

module.exports = function Animals({ admin, animals, images}) {
    return (
      <Layout >
     <div>
        <h2>Добрый день!</h2>
        <h3>Это наши животные:</h3>
        
        {admin ? (
          <>
          <form className="farmForm">
          <label htmlFor="exampleInput1" className="form-label" >Название животного</label>
          <input name="name" type="text" className="form-control shadow rounded" id="exampleInput4" />
  
          <label htmlFor="exampleInput1" className="form-label" >Список фотографий</label>
          <input name="img" type="text" className="form-control shadow rounded" id="exampleInput5" />

          <label htmlFor="exampleInput1" className="form-label" >Описание</label>
          <input name="text" type="text" className="form-control shadow rounded" id="exampleInput6" />
  
          <button type="submit" className="btn btn-primary shadow rounded">Создать</button>

          <h3 className="farmErrMsg"></h3>
          <hr />
        </form>

    <div className='subscribe'>
         {animals.map((animal) => (
        <li className="entryitem" id={animal.id} key={animal.id}>
        <span>{animal.name} </span>
        <button href={`/animals/edit/${animal.id}`}> {animal.name} </button>
          <button data-petid={animal.id} id={animal.id} type='button' className="btn btn-danger">удалить</button>
          </li>
        ))}
    </div>
    </>
    ) : (
    <div className='subscribe'>
     {animals.map((animal) => (
      // <Card {animal.image}>
        <li className="entry-item pad-b-4" key={pet.id}>
          <img src={animal.img} alt="pet"/>
          <span>{animal.name} </span>
          <span>{animal.text} </span>
          </li> 
        ))}
    </div>
)}

</div>
{/* <script defer src='/js/farm.js'/> */}
      </Layout>
    )
}