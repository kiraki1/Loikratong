// คำอวยพรที่สุ่มให้กับกระทง
const randomMessages = [
    "ขอให้ชีวิตราบรื่นเหมือนสายน้ำ",
    "ขอให้ความสุขลอยไปกับกระทง",
    "ขอให้ปีนี้เต็มไปด้วยความโชคดี",
    "ขอให้ความรักลอยมาเหมือนกระทง",
    "ขอให้สุขภาพแข็งแรงตลอดปี"
];

// ฟังก์ชันที่ใช้สร้างกระทงที่ลอยขึ้นและหายไป
function createLantern() {
    const lantern = document.createElement("div");
    lantern.classList.add("lantern");

    // สร้าง <img> สำหรับกระทง
    const lanternImg = document.createElement("img");
    lanternImg.src = "images/lenticular.png"; // ชื่อไฟล์ภาพกระทงที่คุณต้องการใช้
    lanternImg.alt = "กระทง";

    // สุ่มข้อความสำหรับกระทง
    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];

    const message = document.createElement("div");
    message.classList.add("lantern-message");
    message.textContent = randomMessage;

    lantern.appendChild(lanternImg);
    lantern.appendChild(message);

    // สุ่มตำแหน่งเริ่มต้นของกระทง (แนวนอน)
    const startX = Math.random() * 100;
    lantern.style.left = `${startX}%`;
    lantern.style.bottom = `0%`;

    document.getElementById("floating-lanterns").appendChild(lantern);

    // ลบกระทงหลังจากเคลื่อนที่เสร็จ
    setTimeout(() => {
        lantern.remove();
    }, 10000);
}

// ฟังก์ชันที่ใช้สร้างกระทงและคำอวยพรเมื่อผู้ใช้ส่งคำอวยพร
function submitMessage() {
    const messageText = document.getElementById("message").value;
    if (messageText.trim() !== "") {
        const lantern = document.createElement("div");
        lantern.classList.add("lantern");

        const lanternImg = document.createElement("img");
        lanternImg.src = "images/lenticular.png";
        lanternImg.alt = "กระทง";

        const message = document.createElement("div");
        message.classList.add("lantern-message");
        message.textContent = messageText;

        lantern.appendChild(lanternImg);
        lantern.appendChild(message);

        const startX = Math.random() * 100;
        lantern.style.left = `${startX}%`;
        lantern.style.bottom = `0%`;

        document.getElementById("floating-lanterns").appendChild(lantern);
        document.getElementById("message").value = "";

        showPopup();
    } else {
