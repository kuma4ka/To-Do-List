const express = require('express');
const app  = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const healthRouter = require('./routes/health');
const calculateRouter = require('./routes/calculate');

app.use("/health", healthRouter);
app.use("/calculate", calculateRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});