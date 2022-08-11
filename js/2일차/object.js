'use stric'

//객체 생성
let test = {
    name : "jomuk",
    age : 28,
} ;

//객체 호출
console.log(test)

//객체 데이터 입력(점 표기법)
test.tier = "master"
console.log(test)

//객체 데이터 입력(괄호 표기법)
test["tier2"] = "gold"
console.log(test)

//데이터 삭제
delete test["tier2"] ;
console.log(test)

//메소드(객체안의 함수)
//두개의 파라미터값을 입력 받아 더하는 메소드
let obj = {
    add : function a(num1,num2) {
        let sum = num1 + num2;        
        return sum;
    }
}
console.log(obj.add(5,3))


//두개의 파라미터값을 입력 받아 객체에 추가하는 메소드
let test2 = {
    add : function(a,b) {
        test2[a] = b ;
    }
}
test2.add("테스트속성","테스트값");
console.log(test2)



