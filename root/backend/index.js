
const express = require('express')
const mongoose = require('mongoose');

const config =require('./config/keys.js')

const admins = require('./routes/api/admins')
const application = require('./routes/api/application')
const notification = require('./routes/api/notification')
const requests = require('./routes/api/requests')
const tasks = require('./routes/api/tasks')
const event = require('./routes/api/event')
const eventRequest = require('./routes/api/eventRequest')
const eventBooking = require('./routes/api/eventBooking')
const users = require('./routes/api/users.js')
const reviews = require('./routes/api/reviews')

const app = express()


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(express.json())

mongoose.connect(config.mongoURI, { useNewUrlParser: true })
    .then(() => console.log('We are connected to MongoDB'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send(`<h2>Welcome to LirtenHub</h2> `);
})

// Direct routes to appropriate files 
app.use('/api/admins',admins)
app.use('/api/notifications', notification)
app.use('/api/application', application)
app.use('/api/requests', requests)
app.use('/api/tasks',tasks)
app.use('/api/events', event)
app.use('/api/eventRequests', eventRequest)
app.use('/api/eventBookings', eventBooking)
app.use('/api/users', users)
app.use('/api/reviews', reviews)


//to be integrated----------------

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })
const port = process.env.PORT||3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

