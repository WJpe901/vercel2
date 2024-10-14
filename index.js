import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, "src/views"));

app.set("views", join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.send("hello world"));

app.listen(3000);
console.log("server is listen on port", 3000);
