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

document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Email:", email);
  console.log("Phone:", phone);
});
