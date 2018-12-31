const app = require('./src/app')

const { PORT } = process.env

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT || 3000}`)
})