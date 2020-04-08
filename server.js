var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

const apiRouter = require("./routes/api")
const indexRouter = require('./routes/index')
const noteRouter = require("./routes/notesRouter")
//middle wear for express//

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')))

app.use("/api", apiRouter)
app.use("/notes", noteRouter)
app.use('/', indexRouter)

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
