module.exports = (app) => {
    
    app.post("/api/diary", async (req, res, next) => {
        const {timestamp} = req.body;
        const diary = {...req.user.data.diary, ...{[timestamp]: {...req.body}}};
        req.user.data.diary = diary;
        await req.user.markModified("data.diary");
        await req.user.save();
        res.send(req.user);
    });
};