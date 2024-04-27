var express = require('express');
var cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: './public/data/uploads/' })
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyze', function(req, res) {
  //output
  res.json({
    name: "placeholder",
    type: "placeholder",
    size: "placeholder"
  })
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
