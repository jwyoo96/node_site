"use strict";

const id = document.querySelector("#id"),
    nm = document.querySelector("#nm"),
    pw = document.querySelector("#pw"),
    cfPw = document.querySelector("#cf-pw"),
    registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (pw.value !== cfPw.value)
        return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: nm.value,
        psword: pw.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
}