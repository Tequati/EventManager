"use strict"
$(window).on("load",function()
{
	var value=$("#invLnk").val();
	new QRCode(document.getElementById("qrcode"), 
	{
		text: value,
		width: 157,
		height: 157,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});
	$("#invBut").click (function() {
		$("#invLnk").select();
		document.execCommand('copy');
	});
	$("#ownBut").click (function() {
		$("#ownLnk").select();
		document.execCommand('copy');
	});
	$("#invGoBut").click(function(){
		location.href=($("#invLnk").val());
	});
	$("#ownGoBut").click(function(){
		location.href=($("#ownLnk").val());
	});
});