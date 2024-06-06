const div = document.querySelector('.subscribe1');

div.addEventListener('click', async (e) => {
  try {
    if (e.target.classList.contains('btn-outline-info')) {
      e.preventDefault();
      const form1 = `
    <form class="editForm" id=${e.target.dataset.everyid}>
       <label htmlFor="exampleInput1" class="form-label">Название животного</label>
       <input name="name" type="text" class="form-input" id="exampleInput4" />

       <label htmlFor="exampleInput3" class="form-label">Описание</label>
       <input name="text" type="text" class="form-input" id="exampleInput6" />

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
          console.log('====', card);
          card.children[1].innerText = ` ${res.name} `;
          card.children[2].innerText = ` ${res.text} `;
          formE?.remove();
        }
      });
    }

    if (e.target.classList.contains('btn-outline-danger')) {
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

    if (e.target.classList.contains('btn-outline-warning')) {
      e.preventDefault();
      const form1 = `
    <form class="newForm" id=${e.target.dataset.everyid}>
       <label htmlFor="exampleInput1" class="form-label">ссылка</label>
       <input name="img" type="text" class="form-input" id="exampleInput" />

       <button type="submit" class="btn btn-primary shadow rounded">добавить</button> 
    </form>
        `;

      const entryitem = e.target.closest('.entryitem1');
      entryitem.insertAdjacentHTML('beforeend', form1);

      const formE = entryitem.querySelector('.newForm');

      formE.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = new FormData(formE);
        const res = Object.fromEntries(data);
        res.id = formE.getAttribute('id');

        const response = await fetch(`/animals/${e.target.id}`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(res),
        });

        const { status, image } = await response.json();
        if (status === 'success') {
          const newPhoto = `
          <li class="photo" id=${image.id} key=${image.id}>
          <img src=${image.img} alt="animal" />
          <button data-imgid=${image.id} id=${res.id} type="button" class="btn btn-outline-secondary">поменять фото</button>
          <button data-imgid=${image.id} id=${res.id} type="button" class="btn btn-outline-dark">удалить фото</button>
        </li>
          `;
          const card = document.querySelector('.card');
          card.insertAdjacentHTML('beforeend', newPhoto);
          formE?.remove();
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});
