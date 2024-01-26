const inputBox = document.getElementById('input-box');
const imgBox = document.getElementById('img-box');
const qrImg = document.getElementById('qr-img');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click',() => {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
});
