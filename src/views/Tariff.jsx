const React = require('react');
const Layout = require('./Layout');

module.exports = function Tariff({ prices }) {
  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Тариф</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{prices[1].tariff}</td>
            <td>{prices[1].cost}</td>
          </tr>
          <tr>
            <td>{prices[0].tariff}</td>
            <td>{prices[0].cost}</td>
          </tr>
          <tr>
            <td>{prices[3].tariff}</td>
            <td>{prices[3].cost}</td>
          </tr>
          <tr>
            <td>{prices[2].tariff}</td>
            <td>{prices[2].cost}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};
