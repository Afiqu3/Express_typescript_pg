import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { userRouter } from "./modules/user/user.route";
import { profileRouter } from "./modules/profile/profile.route";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  //   res.send("Hello World!");
  res.status(200).json({
    message: "Successfully connected to the server",
    author: "Afique",
  });
});

app.use("/api/users", userRouter);
app.use("/api/profile", profileRouter);

export default app;
