import express from "express";
import { create, getAll, getStudentById } from "./controller.js";

const app = express();
app.use(express.json());
const router = express.Router();
router.post("/create", create);
router.get("/student/:id", getStudentById);
router.get("/students", getAll);
app.use("/", router);
app.listen(3000, () => {
  console.log("listening on port 3000");
});
