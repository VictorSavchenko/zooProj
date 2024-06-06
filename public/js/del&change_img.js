const card = document.querySelector('.card');

card.addEventListener('click', async (e) => {
  try {
    if (e.target.classList.contains('btn-outline-dark')) {
      e.preventDefault();
      const res = { photoId: e.target.dataset.imgid };

      const response = await fetch(`/animals/images/${e.target.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(res),
      });

      const { change } = await response.json();
      if (change === 'success') {
        const del = e.target.closest('.photo');
        del?.remove();
      }
    }
    if (e.target.classList.contains('btn-outline-secondary')) {
      e.preventDefault();

      const form = `
      <form class="photoEditForm" data-animalid=${e.target.id} id=${e.target.dataset.imgid}>
         <label htmlFor="exampleInput1" class="form-label">Ссылка</label>
         <input name="img" type="text" class="form-input" id="exampleInput9" />
  
         <button type="submit" class="btn btn-primary shadow rounded">изменить</button> 
      </form>
          `;

      const photo = e.target.closest('.photo');
      photo.insertAdjacentHTML('beforeend', form);

      const formE = photo.querySelector('.photoEditForm');

      formE.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = new FormData(formE);
        const res = Object.fromEntries(data);
        res.photoId = e.target.id;

        const response = await fetch(`/animals/images/${e.target.dataset.animali}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(res),
        });

        const { change } = await response.json();
        if (change === 'success') {
          console.log('====', photo.children[0]);
          photo.children[0].setAttribute('src', res.img);
          formE?.remove();
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});
