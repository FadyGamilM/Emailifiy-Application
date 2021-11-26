//! import express
const express = require("express");

//! Configure and fire express app
const app = express();

app.get("/", (req, res, next) => {
	res.json("Running");
});

// development env port = 5000 , production port = "From Heruko"
const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
	console.log(`Express Server is running up on port ${PORT}`);
});
