module.exports = (app) => {
    app.post("/api/diary", async (req, res) => {
        const {timestamp} = req.body;
        const diary = {...req.user.data.diary, ...{[timestamp]: {...req.body}}};
        req.user.data.diary = diary;
        await req.user.markModified("data.diary");
        await req.user.save();
        console.log(req.user);
        res.send(req.user);
    });
};