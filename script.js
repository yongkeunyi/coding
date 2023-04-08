window.onload = function() {
    document.getElementById("personalInfo").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        console.log(`이름: ${name}\n이메일: ${email}\n전화번호: ${phone}`);

        alert("인적사항이 제출되었습니다.");
    });
};
