const express = require('express')
const router = express.Router()
app = express();

// define the home page route
router.get('/', (req, res)=> {
  res.render("webpages/index")
})

router.get('*', (req, res)=> {
  res.render("webpages/404")
})

router.get('/rgb', function (req, res) {
  res.send('webpages/rgb')
})

module.exports = router