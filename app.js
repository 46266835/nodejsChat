var server = require("http").createServer();
var io = require("socket.io")(server);

io.on("connection", function(client){
    console.log("有人上线了");

    client.on("disconnect", function(){
        console.log("有人下线了");
    })
});

server.listen(3000);
