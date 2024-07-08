const fortunes = {
    '양자리': '긍정적인 에너지가 넘치는 하루가 될 것입니다.',
    '황소자리': '조금 지칠 수 있지만, 계획을 잘 세우면 문제없이 해결될 거예요.',
    '쌍둥이자리': '소소하지만 기분 좋은 일들이 기다리고 있어요.',
    '게자리': '일상 속에서 의미 있는 발견이 있을 거예요.',
    '사자자리': '주변 사람들과의 소통이 중요한 하루가 될 것입니다.',
    '처녀자리': '집중력을 발휘하면 좋은 결과를 얻을 수 있어요.',
    '천칭자리': '조금 긴장감을 느낄 수 있지만, 차분하게 해결할 수 있을 거예요.',
    '전갈자리': '감정적으로 조금 예민할 수 있으니 주의가 필요해요.',
    '사수자리': '뜻밖의 좋은 소식이 당신을 기다리고 있어요.',
    '염소자리': '일이 순조롭게 진행될 것입니다.',
    '물병자리': '창의적이고 다양한 경험이 당신을 기다리고 있어요.',
    '물고기자리': '감정적으로 안정된 하루가 될 것입니다.'
};

function getFortune() {
    const starSign = document.getElementById('star-sign').value;
    const fortune = fortunes[starSign];

    // SweetAlert2 알림창 표시
    Swal.fire({
        title: `${starSign}의 운세`,
        text: fortune || '유효하지 않은 별자리입니다.',
        icon: 'info',
        confirmButtonColor: '#3085d6',
        confirmButtonText: '확인'
    });

    // 운세 결과를 페이지에 표시
    const fortuneText = document.getElementById('fortune-text');
    if (fortune) {
        fortuneText.textContent = fortune;
        document.getElementById('fortune-container').style.display = 'block';
    } else {
        document.getElementById('fortune-container').style.display = 'none';
    }
}
