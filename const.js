require("dotenv").config({ path: "env.txt" });
const languageCode = process.env.LANG || "en-US";
module.exports = languageCode;
