import express from "express";
import Films from "./src/controllers/Films.js";

const app = express();
const port = process.env.PORT || 4002;

app.use((req, res, next) => {
    const today = new Date(Date.now());
    console.log(
        `Date: ${today.toLocaleDateString("pt-br"
        )}, Time: ${today.toLocaleTimeString()}`
    );
    next();
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor iniciado em  http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.status(200);
    res.send({"mensagem": `Servidor ativo! vá para http://localhost:${port}/entidade/id?enrichFields=field1,field2`});
});

Films.routers(app);
