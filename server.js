const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const driver = require('./driver');

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    console.info('[expressjs-log][get][/]');
    res.send('Get-response from expressjs server');
});

app.post('/', (request, response) => {
    console.log('[expressjs-log][post][/]');
    console.log('[expressjs-log][post][body]', request.body);
    driver.insertDocument(request.body, (error, result) => {
      console.error(error);
      console.info(result);
    });
    response.send({responseContent: 'Post-response from expressjs server'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})