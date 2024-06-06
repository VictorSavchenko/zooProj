const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px',
      }}
      >
        <div style={{ flex: 1, textAlign: 'right' }}>
          <h1>Добро пожаловать в Урюпинский зоопарк!</h1>
          <p className="lead">Урюпинский зоопарк – это место, где каждый день становится праздником. Основан в 1960 году с целью создания места, где люди могли бы познакомиться с разнообразием животного мира нашей планеты. С тех пор зоопарк стал популярным местом среди жителей Урюпинска и туристов, желающих провести время в компании удивительных зверей и птиц.</p>
          <p><small>В Урюпинском зоопарке вы найдёте множество интересных и увлекательных занятий. Здесь можно увидеть и познакомиться с представителями различных видов животных, от маленьких зайцев до величественных львов. Посетители могут прогуляться по зоопарку, наслаждаясь красотой природы и наблюдая за жизнью животных в их естественной среде.</small></p>
          <p>В зоопарке организуются различные мероприятия и показы, включая дрессурные выступления животных, экскурсии по территории зоопарка и мастер-классы по уходу за домашними животными. Кроме того, для детей предусмотрены игровые площадки и зоны для творчества, где они могут проявить свою креативность и весело провести время.</p>
          <p>Не упустите возможность посетить кафе-зоосад, где вы сможете насладиться вкусной едой прямо в сердце зоопарка. А после прогулки по территории зоопарка, вы можете отдохнуть в одном из кафе или ресторанов, предлагающих великолепные виды на живописный пруд.</p>
          <p>Приглашаем всех желающих посетить Урюпинский зоопарк – место, где каждая минута проведенная здесь станет незабываемым воспоминанием! Приезжайте и узнайте, почему именно здесь вы найдёте идеальное сочетание природы, науки и развлечений.</p>
        </div>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <img src="assets/zoo.jpg" alt="Красивая фотография" style={{ maxWidth: '150%' }} />
        </div>
      </div>

      <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aee3899e807c718299700d31b4f95944e782592002c63ef0dd2379a0593ab9fdc&amp;source=constructor" width="100%" height="400" frameBorder="0" />
      </div>
      <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
        <p><strong>График работы:</strong> Понедельник - Воскресенье с 09:00 до 20:00</p>
        <p><strong>Контакты:</strong></p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Email: info@uryupinskzoo.ru</li>
          <li>Телефон: +7 (999) 999-99-99</li>
          <li>Адрес: ул. Зоологическая, 1, Урюпинск</li>
        </ul>
      </footer>
    </Layout>
  );
}

module.exports = Home;
