const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ login }) {
  return (
    <Layout login={login}>
      <div className='container'>
        {login ? (
          <div className='form-container-btn'>
            <a href="/animals" class="btn btn-success form-button form-button-success custom-button">Перейти к редактированию животных</a>
            <a href="/tariff" class="btn btn-success form-button form-button-success custom-button">Перейти к редактированию тарифов</a>
          </div>
        ) : (
          <>
            <h2 className='lTag row justify-content-center'>Вход</h2>
            <h3 className='text-center text-muted'>
              <i>Войти может только администратор</i>
            </h3>
            <div className='form-container'>
              <div className='card form-card'>
                <form action='/admin/login' method='POST' id='loginForm'>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Введите логин
                    </label>
                    <input
                      type='text'
                      className='form-input'
                      id='exampleInputEmail1'
                      name='login'
                    />
                    <div id='logErrMsg' />
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='exampleInputPassword1'
                      className='form-label'
                    >
                      Введите пароль
                    </label>
                    <input
                      type='password'
                      className='form-input'
                      id='exampleInputPassword1'
                      name='password'
                    />
                    <div id='pasErrMsg' />
                  </div>
                  <div id='errMsg' />
                  <div className='text-center'>
                    <button
                      type='submit'
                      className='form-button form-button-success'
                    >
                      Войти
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <script defer src='/js/login.js' />
          </>
        )}
        <link rel='stylesheet' href='/css/forms.css' />
      </div>
    </Layout>
  );
};
