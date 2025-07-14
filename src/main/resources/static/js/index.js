document.addEventListener('DOMContentLoaded', function() {
    // 시간 업데이트 함수
    function updateTime() {
        const now = new Date();
        const timeElement = document.getElementById('currentTime');
        const dateElement = document.getElementById('currentDate');

        // 시간 포맷팅 (시:분:초)
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;

        // 날짜 포맷팅
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const days = ['일', '월', '화', '수', '목', '금', '토'];
        const dayName = days[now.getDay()];

        // 날짜 표시
        dateElement.textContent = `${year}년 ${month}월 ${date}일 ${dayName}요일`;

        // 시간대별 인사말 업데이트
        updateGreeting(hours);
    }

    // 시간대별 인사말 업데이트 함수
    function updateGreeting(hours) {
        const messageElement = document.querySelector('.message');
        let greeting = '';

        if (hours >= 5 && hours < 12) {
            greeting = '상쾌한 아침입니다!';
        } else if (hours >= 12 && hours < 17) {
            greeting = '활기찬 오후 되세요!';
        } else if (hours >= 17 && hours < 21) {
            greeting = '편안한 저녁 보내세요!';
        } else {
            greeting = '오늘도 좋은 하루 보내셨나요?';
        }

        messageElement.textContent = greeting;
    }

    // 페이지 로드 시 환영 애니메이션
    const welcomeContainer = document.querySelector('.welcome-container');
    welcomeContainer.style.opacity = '0';
    welcomeContainer.style.transform = 'translateY(20px)';

    requestAnimationFrame(() => {
        welcomeContainer.style.transition = 'all 0.6s ease-out';
        welcomeContainer.style.opacity = '1';
        welcomeContainer.style.transform = 'translateY(0)';
    });

    // 초기 시간 설정 및 1초마다 업데이트
    updateTime();
    setInterval(updateTime, 1000);

    // 시계 숫자 애니메이션 효과
    const timeElement = document.getElementById('currentTime');
    timeElement.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    timeElement.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});