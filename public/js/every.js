const div = document.querySelector('.subscribe1');


div.addEventListener('click', async (e) => {
  try {
    if (e.target.classList.contains('btn-info')) {
      e.preventDefault();
      //! !
      const form1 = `
    <form class="editForm" id=${e.target.dataset.everyid}>
       <label htmlFor="exampleInput1" className="form-label">Название животного</label>
       <input name="name" type="text" className="form-control shadow rounded" id="exampleInput4" />

       <label htmlFor="exampleInput2" className="form-label">Список фотографий</label>
       <input name="img" type="text" className="form-control shadow rounded" id="exampleInput5" />

       <label htmlFor="exampleInput3" className="form-label">Описание</label>
       <input name="text" type="text" className="form-control shadow rounded" id="exampleInput6" />

       <button type="submit" className="btn btn-primary shadow rounded">Создать</button> 

          <h3 class="farmErrMsg"></h3>
          <hr />
    </form>
        `;

      const entryitem = e.target.closest('.entryitem1');
      entryitem.insertAdjacentHTML('beforeend', form1);

      const formE = entryitem.querySelector('.editForm');

      formE.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = new FormData(formE);
        const res = Object.fromEntries(data);
        const entryId = formE.getAttribute('id');
        res.id = entryId;

        const response = await fetch(`/animals/${e.target.id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(res),
        });

        const { status } = await response.json();
        if (status === 'success') {
          const card = e.target.closest('.entryitem1');
          card.children[1].innerText = res.name;
          card.children[2].innerText = res.text;
        //   card.children[0].setAttribute('src', res.img);

          formE?.remove(); 
        }
      });
    }

    if (e.target.classList.contains('btn-danger')) {
      e.preventDefault();
      // console.log(e.target)
      // console.log(e.target.dataset.petid)
      const res = { animalId: e.target.dataset.everyid };
      const response = await fetch(`/animals/${e.target.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(res),
      });

      const { change } = await response.json();
      if (change === 'success') {
        const del = e.target.closest('.entryitem1');
        del?.remove(); 
      }
    }
  } catch (error) {
    console.log(error);
  }
});
