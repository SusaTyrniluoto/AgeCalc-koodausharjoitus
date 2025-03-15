// messages.ts
export const birthdayMessages = {
  newborn: `
    <h2>Onneksi olkoon!</h2>
    <p>Synnyt tänään!</p>
  `,
  oneYearOld: `
    <h2>Onneksi olkoon syntymäpäiväsi kunniaksi!</h2>
    <p>Olet nyt vuoden vanha </p><h1>👶</h1>
  `,
  generic: (age: number) => `
    <h2>Onneksi olkoon!</h2>
    <p>Täytät tänään ${age} vuotta 💃🕺🥳</p>
  `
};

export const generalMessages = {
  notBorn: `<p>Et ole vielä syntynyt.</p>`,
  lessThanOneYear: `<p>Olet alle vuoden ikäinen.</p>`,
  oneYear: `<p>Olet yhden vuoden ikäinen.</p>`,
  older: (age: number) => `<h3>Olet ${age} vuotta vanha.</h3>`
};

export const daysMessage = (daysLeft: number) => `
  <p>Syntymäpäivääsi on <strong>${daysLeft}</strong> päivää, joten ehdit valmistautua juhliisi vielä!</p>
`;

export const advertisementHTML = `
  <p>Oletko ajatellut tilata syntymäpäiväjuhliin valokuvaajaa?</p>
  <p class="yhteystiedot">
    <b>Susa Tyrniluoto</b><br>
    <span class="subtitle">Tamperelainen valokuvaaja ja kuvataiteilija</span><br>
    <span class="contact">
      Puh: 041 502 3651<br>
      <a href="mailto:info@tyrniluoto.fi">info@tyrniluoto.fi</a><br>
      <u><a href="https://www.tyrniluoto.fi" target="_blank">www.tyrniluoto.fi</a></u>
    </span>
  </p>
`;
