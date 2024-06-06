const div = document.querySelector('.subscribe');
const form = document.querySelector('.animalForm');
const errMsg = document.querySelector('.animalErrMsg');
const btn = document.querySelector('#photo');

let num = 0;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  let arr;
  if (num) {
    arr = Object.values(res);
    arr.splice(0, 2);
    arr.splice(-1, 1);
    res.arr = arr;
  }
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

      const { status, animal, image, images } = await response.json();
      if (status === 'success') {
        const newPet = `
        <div class="entryitem" id=${animal.id} key=${animal.id}>


        <div
      id=${`carouselExampleControls_${animal.id}`}
      class="carousel slide"
      data-bs-ride="carousel"
    >
      
      <div class="carousel-inner" id=${`car${animal.id}`}>


            <div key={photoIndex} class='carousel-item active'>
              <img
                src=${image.img}
                class="d-block w-100"
                alt=${animal.name}
                data-id=${image.id}
              />
            </div>


            </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target=${`#carouselExampleControls_${animal.id}`}
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target=${`#carouselExampleControls_${animal.id}`}
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">Next</span>
      </button>
    </div>


          <a href=${`/animals/${animal.id}`} class="btn btn-outline-info">${animal.name}</a>
          <button data-animalid=${animal.id} id=${animal.id} type="button" class="btn btn-outline-danger">удалить</button>
       </div>
          `;

        div.insertAdjacentHTML('beforeend', newPet);
        const car = document.querySelector(`#car${animal.id}`);
        console.log(images)
        if (images.length !== 0) {
          for (let i = 0; i < images.length; i += 1) {
            const img = `
            <div key={photoIndex} class='carousel-item'>
                  <img
                    src=${images[i].img}
                    class="d-block w-100"
                    alt=${animal.name}
                    data-id=${images[i].id}
                  />
                </div>
            `;
            car.insertAdjacentHTML('beforeend', img);
          }
        }
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
    if (e.target.classList.contains('btn-outline-danger')) {
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
  num += 1;
  try {
    const find = document.querySelector(`#input${num}`);

    if (find) {
      num += 1;
    }
    const newPhoto = `
    <label htmlFor="exampleInput2" class="form-label">Фотографии</label>
    <input name=${`img${num}`} type="text" class="form-input" id=${`input${num}`} />
          `;
    const input = document.querySelector('#example6');
    input.insertAdjacentHTML('beforebegin', newPhoto);
  } catch (error) {
    console.log(error);
  }
});
