//스크립트태그는 작성하지 않음, 
//팝업창 종류
//1.alert 확인
alert("이건alert");//당연하게 앞에 window.이 생략됐음
//2.confirm 확인/취소 (예/아니오)true/false가 return됨
var confirmValue= confirm("컨펌창");
alert(confirmValue);
console.log(confirmValue);
//3.prompt 입력 > 확인/취소(입력한 값이 return됨)
var promptValue= prompt("너 별명이 뭐야?");
alert(promptValue);
console.log(promptValue);
document.write(promptValue);