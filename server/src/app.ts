import express, { Application } from "express";
import "express-async-errors";
import { HandleErrors } from "./errors";
import usersRoute from "./routes/users.routes";
import loginRouter from "./routes/login.routes";
import contactsRouter from "./routes/contacts.routes";

const app: Application = express();
app.use(express.json());

app.use("/login", loginRouter);
app.use("/users", usersRoute);
app.use("/users/contacts", contactsRouter);

app.use(HandleErrors);

export default app;
