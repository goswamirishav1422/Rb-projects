let http = require("http");
const fs = require("fs");
let data = "";

const axios = require("axios");

//create server
let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
    res.write('hello')

  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
      const headerDate =
        res.headers && res.headers.date ? res.headers.date : "no response date";
      console.log("Status Code:", res.status);
      console.log("Date in Response header:", headerDate);

      const users = res.data;

      for (user of users) {
        if (user.id < 100) {
          data += `Got user comment: ${user.body} ${user.id}`;
        //   console.log(`Got user comment: ${user.body} ${user.id}`);
        }
      }
      fs.writeFile("<postId>+<commentId>.txt", JSON.stringify(data), (err) => {
        console.log(data);
      });
    })

    .catch((err) => {
      console.log("Error: ", err.message);
    });
    const read=fs.readFile('<postId>+<commentId>.txt','utf-8',(error,data)=>{
        console.log(data);
    })
  res.end();
});
server.listen(8000, "127.0.0.1", () => {
  console.log("i am listing at port no 8000");
});
