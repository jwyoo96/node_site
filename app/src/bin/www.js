"use strict";

const express = require("express");

const app = require("../../../src/app");
const PORT = 3000;

app.listen(PORT, () => {
    console.log('start server...');
});

