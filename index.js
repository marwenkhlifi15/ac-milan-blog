import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
const articles =[];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { articles }); // Passer la variable articles à EJS
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.get('/create', (req, res) => {
    res.render('create.ejs');  
});

app.post("/create", (req, res) => {
    const newArticle = {
        id: articles.length + 1,
        title: req.body.title,
        content: req.body.content,
        date: new Date().toLocaleDateString(), // Ajout de la date
    };
    articles.push(newArticle); // Ajouter l'article à la liste
    res.redirect("/"); // Rediriger vers la page d'accueil
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});