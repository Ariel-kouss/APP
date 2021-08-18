let express = require("express");
let db = require('./db/merchants');
app = express()

app.get("/",(req,res) => {
    res.send("<h1> Hello Word <h1>");
});

app.get("/address",async (req, res)=>{
    const result = await db.getAll(req.body)
    console.log(result);
});

app.listen(3006, () =>{ 
    console.log("Server Start on port :3006")
});