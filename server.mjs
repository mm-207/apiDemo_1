import express from "express";
import * as randomRourter from "./routes/random.mjs"

const server = express();
const port = process.env.PORT || 8080;

server.set("port", port);
server.use(express.static("public"));

server.get("/number", function(req,res,next){
    const number = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
    res.status(200).send(number + "").end();
})



server.use("/api/random", randomRourter.default);


server.listen(server.get("port"), function() {
  console.log("server running", server.get("port"));
});
