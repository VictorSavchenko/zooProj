const form = document.querySelector('#loginForm');
const logErr = document.querySelector('#logErrMsg');
const pasErr = document.querySelector('#pasErrMsg');
const err = document.querySelector('#errMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.login) {
    logErr.innerText = 'Введите логин';
  }
  if (!res.password) {
    pasErr.innerText = 'Введите пароль';
  }
  try {
    const response = await fetch('/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
      credentials: 'include',
    });

    const result = await response.json();

    if (result.logErr) {
      err.innerText = result.logErr;
    } else if (result.pasErr) {
      err.innerText = result.pasErr;
    } else {
      setTimeout(() => {
        window.location.href = '/admin';
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
});
