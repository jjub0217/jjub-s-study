let $open = document.querySelector('.over');  // 기능 구현 O
// let $open = document.getElementById('open'); // 기능 구현 O
let $desc = document.querySelector('.detail'); // 기능 구현 O
// let $desc = document.getElementById('desc'); // 기능 구현 O
let $close = document.getElementById('close');

$open.onclick = function showDetail() {
    $desc.style.display = 'block';  // 기능 구현 O
    // document.getElementById('desc').style.display = 'block'; // 기능 구현 O
    $open.style.display = 'none';  // 기능 구현 O
    // document.getElementById('open').style.display = 'none';  // 기능 구현 O
}
// showDetail(); // <- 이벤트는 이벤트 등록과 동시에 이벤트 함수가 실행된다. 
                // 그러므로 함수호출을 하지 않아야 한다.


$close.onclick = function hideDetail() {
    $desc.style.display = 'none';  // 기능 구현 O
    $open.style.display = 'block';
}
// hideDetail(); // <- 이벤트는 이벤트 등록과 동시에 이벤트 함수가 실행된다. 
                // 그러므로 함수호출을 하지 않아야 한다.


