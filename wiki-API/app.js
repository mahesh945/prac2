const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser : true});

const articleSchema = {
    title : String,
    content : String
 };
 
const Article = mongoose.model("Article", articleSchema);

app.get("/articles", function(req, res){
    Article.find(err, foundArticles)
})

newArticle.save();

.put(functin(req,res){
    Article.update(
        {title : req.params.articleTitle},
        {title : req.body.title, content : req.body.content},
        {overwrite : true},
        function(err){
            if(!err){
                res.send("successfully updated article");
            }
        }
    );
});

app.listen(3000, function() {
    console.log("hi"); 
 });

 app.route('/articles', )