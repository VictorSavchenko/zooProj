const div = document.querySelector('.subscribe1');

div.addEventListener('click', async (e) => {
  try {
    if (e.target.classList.contains('btn-info')) {
      e.preventDefault();
      const form1 = `
    <form class="editForm" id=${e.target.dataset.everyid}>
       <label htmlFor="exampleInput1" class="form-label">Название животного</label>
       <input name="name" type="text" class="form-control shadow rounded" id="exampleInput4" />

       <label htmlFor="exampleInput2" class="form-label">Фотографии</label>
       <input name="img" type="text" class="form-control shadow rounded" id="exampleInput5" />

       <label htmlFor="exampleInput3" class="form-label">Описание</label>
       <input name="text" type="text" class="form-control shadow rounded" id="exampleInput6" />

       <button type="submit" class="btn btn-primary shadow rounded">изменить</button> 

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
        const entryId = formE.getAttribute('id'); //!
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
          console.log('====', card);
          card.children[1].innerText = ` ${res.name} `;
          card.children[2].innerText = ` ${res.text} `;
          // console.log(card.children[0].children[IDIMG].children[0]); //в последний id-1
          card.children[0].children[0].children[0].setAttribute('src', res.img);

          formE?.remove(); 
        }
      });
    }

    if (e.target.classList.contains('btn-danger')) {
      e.preventDefault();

      const response = await fetch(`/animals/${e.target.id}`, {
        method: 'DELETE',
      });

      const { change } = await response.json();
      if (change === 'success') {
        const del = e.target.closest('.entryitem1');
        del?.remove(); 
        window.location.href = '/animals';
      }
    }
  } catch (error) {
    console.log(error);
  }
});
