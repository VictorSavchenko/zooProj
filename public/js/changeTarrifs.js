const form = document.querySelector('.table-tariff');
console.log(form);

form.addEventListener('click', async (e) => {
  try {
    e.preventDefault();
    if (e.target.classList.contains('changeBtn')) {
        const TariffId = e.target.id;
        const newPrice = e.target
        .closest('.tr-tariff')
        .querySelector('.form-control').value;
    console.log('Tariff', TariffId, newPrice);

      // const el = document.createElement('div');
      // el.classList = 'alert alert-primary';
      // el.role = 'alert';
      // el.innerText = 'СпИшЬ?))))';
      // document.appendChild(el);

      const response = await fetch('/tariff', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPrice, id: TariffId }),
      });

      const { status } = await response.json();
      if (status === 'success') {
        const strCost = form.querySelector(`[name=cost-${TariffId}]`);
        console.log('strCost', strCost);
        strCost.innerText = newPrice;
        e.target
        .closest('.tr-tariff')
        .querySelector('.form-control').value = '';
      } else {
        alert('Что-то не так в изменении');
        console.log(response);
      }
    }
  } catch (error) {
    alert('Цена не отредактирована');
    console.log(error);
  }
});
