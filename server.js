const express = require("express");
const cors = require("cors");

const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");
const userRouter = require("./routers/user");

const app = express();
const PORT = 4000;

const jsonParser = express.json();
app.use(jsonParser);
app.use(cors());

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
