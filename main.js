const Tram = require('tram-one')

const app = new Tram()
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addActions({students: require('./actions/studentActions')})
app.start('.main')
