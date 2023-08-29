const dns = require("dns");

module.exports = () => {
  return dns.resolve("www.google.com", (err) => {
    if (err) {
      console.log("[FAILED]:check connection failed");
    } else {
      console.log("[SUCCESS]:internet connected");
    }
  });
};
