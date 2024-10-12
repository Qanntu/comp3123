const express = require("express")
const booksRoutes = require("./routes/books")
const mongoose = require ("mongoose")


//const DB_CONNECTION_STRING = "mongodb://localhost:27017/books"
const DB_CONNECTION_STRING = "mongodb+srv://lizzarbsch:niRzLhrydIII1PBV@cluster0.zpjpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error: ", err);
    });


const app = express()
const SERVER_PORT = 3002

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/v1", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    });


    //start server
app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
});
