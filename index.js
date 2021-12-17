const cookieSession = require("cookie-session");
const passport = require("passport");

//! import express
const express = require("express");

//! import colors for terminal shape :D !!
const colors = require("colors");

//! import passport configuration setup from /services/passport
require("./services/passport"); // we need to only execute this requrired file but we don't export anything from it

//! Configure and fire express app
const app = express();

//! connect to atlas cloud for database
require("./services/mongo-atlas");

//! tell passport that we need to use cookies inside our flow to support it
app.use(
	cookieSession({
		// expiration date
		maxAge: 30 * 24 * 60 * 60 * 1000,
		// keys to encrypt our cookie
		keys: [process.env.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

//! require/import auth routes and chain it to main express app
const authRoutes = require("./routes/auth");
const keys = require("./config/keys");

//! chain all routes to app
app.use(authRoutes);

//! development env port = 5000 , production port = "From Azure"
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Express Server is running up on port ${PORT}`.inverse.magenta);
});
