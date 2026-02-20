const app = require('./app')

app.set('port', 3000)

const port = app.get('port')

app.listen(port, () => {
    console.log("Server is running")
})