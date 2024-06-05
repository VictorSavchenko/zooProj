const React = require('react');
const Navbar = require('../components/navbar');

function Layout({ children, login }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx'
          crossOrigin='anonymous'
        />
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz'
          crossOrigin='anonymous'
        ></script>
        <title>Zoo</title>
        {/* <link rel="stylesheet" href="/css/application.css" /> */}
      </head>
      <body>
        <Navbar login={login} />
        <main>{children}</main>
      </body>
    </html>
  );
}

module.exports = Layout;
