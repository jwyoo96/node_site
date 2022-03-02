"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBt = document.querySelector("#loginBt");

loginBt.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};
