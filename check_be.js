const axios = require("axios").default;

module.exports = async () => {
  const dataBody = {
    grant_type: "password",
    client_id: "4",
    client_secret: "dpeRmhz8HCpMdy6jivXLghBprdNbyGNOHGQm8Gcx",
    username: "AgONu00lI293ZRw",
    password: "umYZJXHZex",
    miniapp_version: "4.1.4",
    app_source: "miniapp",
    scope: "*",
  };

  const reqData = await axios.post(
    API_BASE_URL + "/api/get-oauth-token",
    dataBody,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  if (!reqData || !reqData.data) {
    console.log("[FAILED]:check BE cant request data");
  }

  if (reqData.status === 200 && reqData.data) {
    const { access_token, token_type } = reqData.data;

    global.auth = {
      access_token,
      token_type,
    };
    console.log(`[SUCCESS]:get Auth BE succeeded`);
  } else {
    console.log(`[FAILED]:check BE not succeeded`);
  }
};
