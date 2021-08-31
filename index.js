let express = require("express");
let db = require('./db/merchants');
var app = express()

app.get("/",(req,res) => {
    res.send("<h1> Hello Word <h1>");
});

app.get("/address",async (req, res)=>{
    const result = await db.getAll(req.body);
    console.log(result);
    res.status(200).json({result});
});

app.post("/address/create", async (req, res) =>{
    const addAdress = await db.createadress(req.body);
    if(addAdress)
    {
        res.status(200).json({addAdress});
        console.log(addAdress)
    }
    else{
        console.log("erreur de requette")
    }
    
})

  
app.listen(3000, () =>{ 
    console.log("Server Start on port :3000")
});