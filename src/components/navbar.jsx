const React = require('react');

module.exports = function Navbar({ login }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/assets/zooCartoon.png" alt="Логотип" className="navbar-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link navtext " aria-current="page" href="/tariff">
                Тарифы
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navtext" aria-current="page" href="/animals">
                Животные
              </a>
            </li>
            {login ? (
              <li className="nav-item">
                <a className="nav-link navtext" href="/admin/logout">
                  Выйти
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link navtext" href="/admin">
                  Админ
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <link rel="stylesheet" href="/css/navBar.css" />
    </nav>
  );
};
