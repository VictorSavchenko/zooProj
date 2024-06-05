const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ login }) {
  return (
    <Layout login={login}>
      {login ? (
        <>
        <a href='/animals'>Перейти к редактированию животных</a>
        <br />
        <a href='/tariff'>Перейти к редактированию тарифов</a>
        </>
      ) : (
        <>
          <h2 className='lTag'>Вход</h2>
          <hr />
          <form action='/admin/login' method='POST' id='loginForm'>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Введите логин
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleInputEmail1'
                name='login'
              />
              <div id='logErrMsg'></div>
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Введите пароль
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                name='password'
              />
              <div id='pasErrMsg'></div>
            </div>
            <div id='errMsg'></div>
            <button type='submit' className='btn btn-primary'>
              Войти
            </button>
          </form>
          <hr />
          <script defer src='/js/login.js' />
        </>
      )}
    </Layout>
  );
};