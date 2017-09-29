const Tram = require('tram-one')
const html = Tram.html()

module.exports = ({width, value, max}) => {
  const percent = (value / max);
  const widthIsDefined = width != 'undefined'
  const outterWidth = widthIsDefined ? `${width}px` : '100%'
  const innerWidth = widthIsDefined ? `${(percent * width)}px` : `${percent * 100}%`

  console.log(innerWidth, outterWidth)
  const outterStyle = `
    border: 2px solid black;
    height: 10px;
    width: ${outterWidth};
    display: inline-block;
  `
  const innerStyle = `
    background: black;
    height: 10px;
    width: ${innerWidth};
    display: inline-block;
  `
  return html`
    <span style=${outterStyle}>
      <span style=${innerStyle}>
      </span>
    </span>
  `
}
