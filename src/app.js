const express=require("express");
const app=express();
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const allRoutes=require("./backend/routes/MainRoutes");

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.set("views", __dirname + "/client/views"); 
app.engine("html", require("ejs").renderFile); 
app.set("view engine", "ejs"); 
app.use(express.static(path.resolve(__dirname, "client")));
app.use(logger("dev"));

// app.set('trust proxy', 1)

app.use(session({
    secret: "KonfinitySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        path: "/",
        httpOnly: true,
        secure: false,
        maxAge: null
    }
}));


app.use("/",allRoutes);

app.set("port", process.env.PORT || 4000); 
app.listen(app.get("port"), () => {
    console.log("Application running on port: " + app.get("port"));
});

module.exports=app;