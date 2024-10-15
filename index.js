import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));

app.use(express.static(join(__dirname,'src/public')))

app.listen(3000);
console.log("server is listen on port", 3000);
