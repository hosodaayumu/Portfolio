'use strict';

document.querySelectorAll('.hobby-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = '0 6px 16px rgba(0, 123, 255, 0.2)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.08)';
    });
});

// 画像表示用ロジック

document.addEventListener('DOMContentLoaded', () => {  // すべて読み込まれてから処理を行う
    const hobbyItems = document.querySelectorAll('.hobby-item'); // クラスを持つ全ての要素を取得する
    const modal = document.getElementById('image-modal'); //モーダル全体 (div#image-modal) と中にある画像 (img#modal-img) を取得する
    const modalImg = document.getElementById('modal-img'); //モーダルの表示・非表示の制御、および表示する画像を切り替えるために使用する

    const imageMap = {
        "カプセルトイの収集": "素材/カプセルトイコレクション.jpg",  // 各趣味タイトルと対応する画像ファイルのパスを対応付けたオブジェクト
        "懐中時計": "素材/懐中時計.jpg", // タイトルをキーにして画像のURLを取得します。
        "ゲーム": "素材/game.jpg"
    };

    hobbyItems.forEach(item => {
        item.addEventListener('click', () => { // 各趣味ブロックに対してclickイベントを設定。
            const title = item.querySelector('.hobby-title').textContent.trim(); // クリックされたhobby-itemの中の.hobby-title要素を取得
            const imgSrc = imageMap[title]; // 上で取得したタイトルに基づいて、imageMap から画像パスを取得。

            if (imgSrc) { //対応する画像が存在する場合は、modalImg.src に画像パスを代入して表示対象を切り替え
                modalImg.src = imgSrc; // modal を flex 表示にして画面にモーダルを出現させます
                modal.style.display = 'flex';
            }
        });
    });

    modal.addEventListener('click', () => { // モーダルがクリックされたときの処理。
        modal.style.display = 'none'; // 表示を none にして非表示に。
        modalImg.src = ''; // modalImg.src を空にすることで、次回の表示前に画像を初期化（リセット）します。
    });
});
