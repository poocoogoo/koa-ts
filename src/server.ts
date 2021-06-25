const app = require("./app");

const server = app.listen(7001, () => {
   console.log("Server is running at http://127.0.0.1:7001\n");
});
