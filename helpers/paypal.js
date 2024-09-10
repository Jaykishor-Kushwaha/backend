const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AVCp_LmENteL4xVEYmbG4zpbkIgj2NrAYrjQ0PF3gh1oZ_rH8587HON8Uz-UbdpxY1wxrXwgAANzntqk",
  client_secret:
    "EFHzqaxVgltuv1Tb2LYLA3J6DAxUVqPC-ukYBraxQz9ClSP6gErKLM5CQ_sXL9zhU9IGZcwDUy5-JcIr",
});

module.exports = paypal;
