let coverImage = document.getElementById('cover');


// 웸문서에서 태그를 js 코드에 가져와서 
// js 코드에서 해당 태그에 직접 이벤트를 준 js 소스 코드

coverImage.onclick = function(){
    alert('눌렀습니다.');
}

coverImage.onmouseover = function(){
    coverImage.style.border = '5px black solid';
}

coverImage.onmouseout = function(){
    coverImage.style.border = '';
}