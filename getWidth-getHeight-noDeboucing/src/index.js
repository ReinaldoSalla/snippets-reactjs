import express from "express";
import app from "./app";
import {
	hostname,
	port,
	clientDir
} from "./properties/app-properties";

app.listen(8080, hostname, () => {
	console.log(`Server running in URL http://${hostname}:${port}`);
	console.log(`Serving static content from directory ${clientDir}`);
});

