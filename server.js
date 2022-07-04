import app from "./app.js";

const port = 8080

app.listen(port, () => {
    console.log(`Servidor aberto no http://localhost:${port}`);
});