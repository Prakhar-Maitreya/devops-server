const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "ci-cd pipeline is working fine " });
});

app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
