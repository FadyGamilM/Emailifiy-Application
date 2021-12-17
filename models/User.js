const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	googleId: {
		type: String,
	},
});

exports.User = mongoose.model("User", userSchema);
