QR = document.querySelectorAll(".head");
Arrow = document.querySelectorAll("i");
ShowQR = document.querySelectorAll(".qr-code");

isChecked = false;

for (let i = 0; i < QR.length; i ++) {
    QR[i].onclick = function() {
        console.log(i);
        if (!isChecked) {
            Arrow[i].style.transform = 'rotate(90deg)';
            isChecked = true;

            ShowQR[i].style.height = "fit-content";
            ShowQR[i].style.padding = "25px";

        } else {
            Arrow[i].style.transform = 'rotate(0deg)';
            isChecked = false;

            ShowQR[i].style.height = "0px";
            ShowQR[i].style.padding = "0px";
        }
    }
}

coppys = document.querySelectorAll("button");
code = document.querySelectorAll(".pay-code");

for (let i = 0; i < coppys.length; i ++) {
    coppys[i].onclick = function() {
        coppy(code[i]);
    }
}

function coppy(text) {
  navigator.clipboard.writeText(text.outerText);
  alert("Coppied!");
}