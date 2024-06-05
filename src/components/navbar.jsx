const React = require('react');

module.exports = function Navbar({ login }) {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='/'>
          Урюпинский
          <br />
          зоопарк
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='/tariff'>
                Тарифы
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='/animals'>
                Животные
              </a>
            </li>
            {login ? (
            <li class='nav-item'>
              <a class='nav-link' href='/admin/logout'>
                Выйти
              </a>
            </li>
            ) : (
                <li class='nav-item'>
              <a class='nav-link' href='/admin'>
                Админ
              </a>
            </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
