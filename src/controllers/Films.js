import api from "../services/api.js";

export default class Films {
    static routers(app) {
        app.get("/:entity/:id", async (req, res) => {
            const firstPath = `${req.params.entity}/${req.params.id}`;
            const enrichFields = req.query.enrichFields;
            // const splitEnrichField = enrichFields.split(",");

            const swFilms = await api.get(firstPath);

            // await api.get(firstPath)
            //     .then((resp) => {
            //         res.status(200).send(resp.data);
            //     })
            //     .catch((err) => {
            //         res.status(400).send(err);
            //     });

            return res.json(swFilms.data);

            // await splitEnrichField.forEach((field) => {
            //     const secondPath = `${field}`;
            //     api.get(secondPath)
            //         .then((resp) => {
            //             console.log(`===> ${secondPath} <===`);
            //             console.log(resp.data);
            //         })
            //         .catch((err) => {
            //             res.status(400).send(err);
            //         });
            // });
        });
    }
}
