const path = require('path')
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 6002;

connectDB();

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

const rtInfo = require('./routes/api/info')

app.use('/routes/api/info', rtInfo)

// CHECK IF ITS PRODUCTION
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}


app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`)
})

