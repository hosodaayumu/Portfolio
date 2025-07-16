'use strict';
// ページロード時のフェードインアニメーション
window.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container');
    container.style.opacity = 0;
    container.style.transform = 'translateY(40px)';
    
    setTimeout(() => {
    container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
    }, 100);
});

// 趣味項目にマウスを乗せたときの追加演出
document.querySelectorAll('.hobby-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
    item.style.boxShadow = '0 6px 16px rgba(0, 123, 255, 0.2)';
    });

    item.addEventListener('mouseleave', () => {
    item.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.08)';
    });
});

// タイトルにアニメーション（波打ちエフェクト）
const title = document.querySelector('h1');
if (title) {
    title.addEventListener('mouseover', () => {
    title.animate(
    [
        { transform: 'scale(1)' },
        { transform: 'scale(1.05)' },
        { transform: 'scale(1)' }
    ],
    {
        duration: 400,
        easing: 'ease-in-out'
    }
    );
    });
}
