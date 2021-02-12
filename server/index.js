// Modules
const express = require('express')
const path = require('path')
const mainRoutes = require('./routes/main-routes')
const app = express()
// Config
    // static files
    app.use(express.static(path.join(__dirname, '../')))

// Routes
app.use('/', mainRoutes)

// Other
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server runing...')
})