// check list
const check_port = require("./check_port");
const check_inet = require("./check_net");
const check_be = require("./check_be");
const check_get_table = require("./check_table");
const port = 3000;
global.API_BASE_URL = "https://devs3.rdo89.com";

check_port(port);
check_inet();
check_be().then(() => {
  check_get_table();
});
