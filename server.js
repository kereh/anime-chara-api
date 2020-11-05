// module
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.get("/", async (req, res) => {
    res.json({
        message: "this data is obtained from http://www.animecharactersdatabase.com",
        writer: "RKereh",
        option: "/(nama_chara) (GET)",
    });
});

app.get("/:chara", async (req, res) => {
    const response = await axios.get("http://www.animecharactersdatabase.com/api_series_characters.php?character_q=" + req.params.chara.replace(" ", "+"), {
        headers: {
            'content-type': 'application/json',
        }
    });
    const json = response.data;
    res.json(json);
});

// app listen 
app.listen(process.env.PORT || 1337, () => {
    console.log("http://localhost:1337");
})