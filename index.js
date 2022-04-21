const express = require('express');
const routerApi = require('./routes');
const {logErrors, errorHandler} = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Inicio');
});

routerApi(app);
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`El puerto es: ${port}`);
});
