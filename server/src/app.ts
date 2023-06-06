import "express-async-errors";
import express from "express";
import { HandleErrors } from "./errors";
import usersRoute from "./routes/users.routes";
import loginRouter from "./routes/login.routes";
import contactsRouter from "./routes/contacts.routes";
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

app.use("/login", loginRouter);
app.use("/users", usersRoute);
app.use("/users/contacts", contactsRouter);

app.use(HandleErrors);

export default app;
