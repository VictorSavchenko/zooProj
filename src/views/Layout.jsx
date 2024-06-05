const React = require('react');

function Layout({ children, login }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zoo</title>
        <link rel="stylesheet" href="/css/application.css" />
      </head>
      <body>
        <header className="header">
          <a href="/" className="site-name">
            <h1>Урюпинский зоопарк</h1>
          </a>
          <div className="nav-links">
            {login ? (
              <>
                <a href="/">Тарифы</a>
                <a href="/">Животные</a>
                <a href="/logout">Выйти</a>

              </>
            ) : (
              <>
                <a href="/">Тарифы</a>
                <a href="/">Животные</a>
                <a href="/admin">Админ</a>
              </>
            )}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

module.exports = Layout;