const div = document.querySelector('.subscribe');
const form = document.querySelector('.animalForm');
const errMsg = document.querySelector('.animalErrMsg');
const btn = document.querySelector('#photo');

let num = 1;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.name || !res.img || !res.text) {
    errMsg.innerText = 'Вы что-то забыли, заполните все поля';
    errMsg.style.color = 'rgb(122, 18, 18)';
  } else {
    try {
      const response = await fetch('/animals', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(res),
      });

      const { status, animal, image } = await response.json();
      if (status === 'success') {
        console.log(image.img);
        const newPet = `
        <div class="entryitem" id=${animal.id} key=${animal.id}>

        <div class="card" id={animal} class="carousel-inner">
            <div class="carousel-item">
              <img
                src=${image.img}
                class="d-block w-100"
                alt="animal"
                data-id=${image.id}
              />
            <button data-imgid=${image.id} id=${animal.id} type="button" class="btn btn-outline-dark"> удалить</button>
            </div>
        </div>

          <a href=${`/animals/${animal.id}`} class="btn btn-primary">${animal.name}</a>
          <button data-animalid=${animal.id} id=${animal.id} type="button" class="btn btn-danger">удалить</button>
       </div>
          `;

        div.insertAdjacentHTML('beforeend', newPet);
        console.log(newPet)
        document.querySelectorAll('input').forEach((el) => el.value = '');
        errMsg?.remove();
      }
    } catch (error) {
      alert(error);
    }
  }
});

div.addEventListener('click', async (e) => {
  try {
    if (e.target.classList.contains('btn-danger')) {
      e.preventDefault();
      const res = { animalId: e.target.dataset.animalid };
      const response = await fetch('/animals', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(res),
      });

      const { change } = await response.json();
      if (change === 'success') {
        const del = e.target.closest('.entryitem');
        del?.remove();
      }
    }
  } catch (error) {
    console.log(error);
  }
});

btn.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const find = document.querySelector(`#input${num}`);

    if (find) {
      num += 1;
    }
    const newPhoto = `
    <label htmlFor="exampleInput2" class="form-label">Фотографий</label>
    <input name=${`img${num}`} type="text" class="form-control shadow rounded" id=${`input${num}`} />
          `;
    const input = document.querySelector('#exampleInput5');
    input.insertAdjacentHTML('afterend', newPhoto);
  } catch (error) {
    console.log(error);
  }
});
