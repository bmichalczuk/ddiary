module.exports = (app) => {
    app.get("/", (req, res) => {
        if(req.user) {
            res.redirect("/diary");
        };
    });
};