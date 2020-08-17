// let $divOpen = document.getElementById('item');
// let $close = document.getElementById('close');


// $divOpen.onclick = () => {
    
// }

// 웹문서에 이벤트가 발생하는 함수 이름을 넣기 위한 js 이벤트 소스 코드 

function showDetail(){
    document.getElementById('desc').style.display = 'block';
    document.getElementById('open').style.display = 'none';
}

function hideDetail(){
    document.getElementById('desc').style.display = 'none';
    document.getElementById('open').style.display = 'block';
}
