const express = require('express');
const app = express();
const port = 3000;

// Middleware (nếu cần)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import và sử dụng routes
const indexRouter = require('./routers/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
