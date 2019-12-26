module.exports = (app) => {
    
    app.post("/api/diary", async (req, res) => {
        const {timestamp} = req.body;
        const newEntry = {[timestamp]: {...req.body}};
        const diary = Object.assign({}, req.user.data.diary, newEntry);
        req.user.data.diary = diary;
        await req.user.markModified("data.diary");
        await req.user.save();
        res.send(req.user);
    });
    app.delete("/api/diary/:entry", async (req, res) => {
        delete req.user.data.diary[req.params.entry];
        await req.user.markModified("data.diary");
        await req.user.save();
        res.send(req.user);
    });
    
};