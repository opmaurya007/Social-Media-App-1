import express, { Request, Response, Express, Application } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import ToDo from "./db/schema";
const app = express();
app.use(cors<Request>());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//"mongodb+srv://root:root@cluster0.mw3p3ad.mongodb.net/todoapp"
const port: number = 2020;
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.63cbxyv.mongodb.net/?retryWrites=true&w=majority",
    {}
  )
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

app.get("/todos", async (req: Request, res: Response) => {
  try {
    const todos = await ToDo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/todos", async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      res.status(404).json({ message: "fields are empty.." });
    }
    const newTodo = new ToDo({ title, description });
    await newTodo.save();
    res.status(200).json("Todo List Updated");
  } catch (error) {
    console.error("Error posting todos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/todos/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await ToDo.findByIdAndDelete(id);
    res.status(200).json("Todo successfully deleted");
  } catch (error) {
    console.error("Error deleting todos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
///update
// app.put("/todos/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const { title, description } = req.body;
//     if (!title || !description) {
//       res.status(404).json({ message: "fields are empty.." });
//     }

//     const updateTodo = await ToDo.findOneAndUpdate(
//       { _id: id },
//       { $set: { title, description } },
//       { new: true }
//     );
//     if (!updateTodo) {
//       res.status(405).json({ message: "fields not found.." });
//     }
//   } catch (error) {
//     console.error("Error deleting todos:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
