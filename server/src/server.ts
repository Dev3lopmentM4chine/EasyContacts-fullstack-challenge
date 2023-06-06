import AppDataSource from "./data-source";
import app from "./app";
import "dotenv/config";

const PORT: number = 3333;
const msg: string = `Server is running in port ${PORT}!🔥🚀`;
const host = "0.0.0.0";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, host, () => {
      console.log(msg);
    });
  })
  .catch((err) => {
    console.log(err);
  });
