const axios = require("axios").default;

module.exports = async () => {
  var getData = await axios.get(API_BASE_URL + "/api/v2/pos/table/list", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: auth.token_type + " " + auth.access_token,
    },
  });

  if (getData.status === 200 && getData.data) {
    console.log("[SUCCESS]:get list table succeeded");
  } else {
    console.log("[FAILED]:failed get list table");
  }
};
