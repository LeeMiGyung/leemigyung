var slideIndex =1; //배열의 index는 0부터 -1까지 해야됨
function showSlides(n) {
slideIndex=n;//현재 인덱스를 n으로 설정.
var i;
/* mySlides클래스가 적용된 엘리먼트들을 찾아서 배열로 리턴
slides는 배열이 됨.
*/
var slides = document.getElementsByClassName("mySlides");
/* next버튼을 눌러서 끝까지 가면. 처음부터 다시시작 */
if (n > slides.length) {slideIndex = 1}
/* prev버튼을 눌러서 처음까지 가면. 끝으로.*/
if (n < 1) {slideIndex = slides.length} ;
//사진을 하나씩, 전부 안보이게.
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
// 선택한 사진만 보이게.
slides[slideIndex-1].style.display = "block";
// dot를 찾아서 배열로 리턴.
var dots = document.getElementsByClassName("dot");
// active설정 모두 없애기
for (i = 0; i < dots.length; i++) {
dots[i].classList.remove("active");
}
// 선택한 사진(dot)만 active 적용
dots[slideIndex-1].classList.add("active");
}
//2초후 다음 페이지로
setInterval('mySlides','')
