const React = require('react');
const Layout = require('./Layout');

module.exports = function Animals({ admin, animals}) {
    return (
      <Layout >
     <div>
        <h4> Welcome to {farm.name}</h4>
        
        {admin ? (
          <>
          <form className="farmForm">
          <label htmlFor="exampleInput1" className="form-label" >pet name</label>
          <input name="name" type="text" className="form-control shadow rounded" id="exampleInput4" />
  
          <label htmlFor="exampleInput1" className="form-label" >pet image</label>
          <input name="img" type="text" className="form-control shadow rounded" id="exampleInput5" />
  
          <button type="submit" className="btn btn-primary shadow rounded">create</button>

          <h3 className="farmErrMsg"></h3>
          <hr />
        </form>

    <div className='subscribe' id={farm.id}>
         {pets.map((pet) => (
        <li className="entryitem" id={pet.id} key={pet.id}>
        <span>{pet.name} </span>
         <img src={pet.img} alt="pet"/>
          <button data-petid={pet.id} id={farm.id} type='button' className="btn btn-danger">delete</button>
          <button data-petid={pet.id} id={farm.id} type='button'className="btn btn-info">edit</button>
          </li>
        ))}
    </div>
    </>
    ) : (
    <div className='subscribe'>
     {animals.map((animal) => (
        <li className="entry-item pad-b-4" key={pet.id}>
        <span>{animal.name} </span>
         <img src={animal.img} alt="pet"/>
          </li>
        ))}
    </div>
)}

</div>
{/* <script defer src='/js/farm.js'/> */}
      </Layout>
    )
}