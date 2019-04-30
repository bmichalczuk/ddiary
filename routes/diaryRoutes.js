module.exports = (app) => {
    app.post("/api/diary", (req, res) => {
        console.log(req.body);
    });
};