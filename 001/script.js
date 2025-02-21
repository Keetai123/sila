function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
}

function submitFeedback() {
    var feedback = document.getElementById('feedback-text').value;
    if (feedback.trim() !== '') {
        alert('ขอบคุณสำหรับความคิดเห็น!');
        document.getElementById('feedback-text').value = ''; // ล้างข้อความหลังจากส่ง
    } else {
        alert('กรุณากรอกความคิดเห็น');
    }
}
