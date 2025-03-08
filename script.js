// Khởi tạo biến đếm số lần click
let clickCount = 0;

// Lấy các phần tử DOM
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
const clockDisplay = document.getElementById('clock');

// Xử lý sự kiện click
clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
});

// Cập nhật đồng hồ
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('vi-VN');
    clockDisplay.textContent = timeString;
}

// Cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);
updateClock(); // Cập nhật ngay lập tức