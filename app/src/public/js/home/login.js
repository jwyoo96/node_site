"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBt = document.querySelector("#loginBt");

loginBt.addEventListener("click", login);

function login() {
    console.log("loginBt");
    const req = {
        id: id.value,
        pw: pw.value,
    };
    fetch("/login", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    });
};
