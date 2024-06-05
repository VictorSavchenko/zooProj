// const card = document.querySelector('.card');

// card.addEventListener('click', async (e) => {
//   try {
//     if (e.target.classList.contains('btn-outline-dark')) {
//       e.preventDefault();
//       const res = { animalId: e.target.dataset.imgid };

//       const response = await fetch(`/animals/images/${e.target.id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify(res),
//       });

//       const { change } = await response.json();
//       if (change === 'success') {
//         const del = e.target.closest('.photo');
//         del?.remove();
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
