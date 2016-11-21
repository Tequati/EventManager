"use strict"
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/*', function(req, res) {
	var lnk = req.originalUrl;
	DBConnection.getEventByLink(lnk, function(ev)								//check results, if err-notify user, if no link-send error page
	{
		res.render(__dirname + '/../public/views/invitepage.ejs',
		{
			/*
			h1		:	'Congratulations!',
			h2		:	'You have successfully created an event.',
			lnk		:	servSettings.server.address + ev.lnk,
			ownlnk	:	servSettings.server.address + ev.ownlnk
			*/
		});
		console.log("invite page sended");
	});
});

module.exports = router;