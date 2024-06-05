const div = document.querySelector('.subscribe');
const form = document.querySelector('.animalForm');
const errMsg = document.querySelector('.animalErrMsg');
console.log(form);
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  console.log(res);
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
        const newPet = `
        <li className="entryitem" id=${animal.id} key=${animal.id}>
        // <Card images=${image}>
        <span> ${animal.name} </span>
        <a href=${`/animals/edit/${animal.id}`} className="btn btn-primary">${animal.name}</a>
        <button data-animalid=${animal.id} id=${animal.id} type="button" className="btn btn-danger">удалить</button>
      </li>
          `;

        div.insertAdjacentHTML('beforeend', newPet);
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
      // console.log(e.target)
      // console.log(e.target.dataset.animalid)
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
