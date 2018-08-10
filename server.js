const express = require('express');

const port = process.env.PORT || 8080;
const app = express();
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;