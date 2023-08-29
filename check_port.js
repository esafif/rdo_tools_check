const net = require("net");
const server = net.createServer();

module.exports = (port) => {
  server.once("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`[FAILED]:port ${port} already in used`);
    }
  });

  server.once("listening", () => {
    console.log(`[SUCCESS]:check port ${port} succeeded or available`);
    server.close();
  });

  return server.listen(port);
};
