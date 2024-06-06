const React = require('react');
const Layout = require('./Layout');

module.exports = function Tariff({ prices, login }) {
  return (
    <Layout login={login}>
      <div className="container">
        <div className="table-container">
          <div className="p-3 bg-info bg-opacity-10 border border-info border-start-5 rounded-end div-tariff">
            <table className="table-tariff">
              <thead>
                <tr className="tr-tariff">
                  <th className="th-tariff">Тариф</th>
                  <th className="th-tariff">Цена</th>
                  {login && <th className="th-tariff">Изменение цены</th>}
                  <th className="th-tariff"> </th>
                </tr>
              </thead>
              <tbody>
                {login
                  ? prices.map((price) => (
                    <tr className="tr-tariff" key={price.id}>
                      <td className="td-tariff">{price.tariff}</td>
                      <td className="td-tariff" name={`cost-${price.id}`}>
                        {price.cost}
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <button
                          type="submit"
                          id={price.id}
                          type="button"
                          className="btn btn-light form-button form-button-success changeBtn"
                        >
                        Изменить
                        </button>
                      </td>
                    </tr>
                  ))
                  : prices.map((price) => (
                    <tr className="tr-tariff">
                      <td className="td-tariff">{price.tariff}</td>
                      <td className="td-tariff">{price.cost}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <link rel="stylesheet" href="/css/tariff.css" />
      </div>
      {login && <script src="/js/changeTarrifs.js" />}
    </Layout>
  );
};
