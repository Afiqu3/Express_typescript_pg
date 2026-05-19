import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import CookieParser from "cookie-parser";
import cors from "cors";
import { userRouter } from "./modules/user/user.route";
import { profileRouter } from "./modules/profile/profile.route";
import { authRouter } from "./modules/auth/auth.route";
import logger from "./middleware/logger";
import globalErrorHandler from "./middleware/globalErrorHandler";
const app: Application = express();

app.use(CookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(
  cors({
    origin: "http://localhost:5000",
  }),
);

app.get("/", (req: Request, res: Response) => {
  //   res.send("Hello World!");
  res.status(200).json({
    message: "Successfully connected to the server",
    author: "Afique",
  });
});

app.use("/api/users", userRouter);
app.use("/api/profile", profileRouter);
app.use("/api/auth", authRouter);

app.use(globalErrorHandler);

export default app;
