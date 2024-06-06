const React = require('react');
const Layout = require('./Layout');

module.exports = function Tariff({ prices }) {
  return (
    <Layout>
      <div className="p-3 bg-info bg-opacity-10 border border-info border-start-5 rounded-end div-tariff">
        <table className="table-tariff">
          <thead>
            <tr className="tr-tariff">
              <th className="th-tariff">Тариф</th>
              <th className="th-tariff">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr-tariff">
              <td className="td-tariff">{prices[1].tariff}</td>
              <td className="td-tariff">{prices[1].cost}</td>
            </tr>
            <tr className="tr-tariff">
              <td className="td-tariff">{prices[0].tariff}</td>
              <td className="td-tariff">{prices[0].cost}</td>
            </tr>
            <tr className="tr-tariff">
              <td className="td-tariff">{prices[3].tariff}</td>
              <td className="td-tariff">{prices[3].cost}</td>
            </tr>
            <tr className="tr-tariff">
              <td className="td-tariff">{prices[2].tariff}</td>
              <td className="td-tariff">{prices[2].cost}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <link rel="stylesheet" href="/css/tariff.css" />
    </Layout>
  );
};
