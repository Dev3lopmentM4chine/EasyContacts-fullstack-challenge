import AppDataSource from "./data-source";
import app from "./app";

const PORT: number = 3000;
const msg: string = `Server is running in port ${PORT}!🔥🚀`;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(msg);
    });
  })
  .catch((err) => {
    console.log(err);
  });
