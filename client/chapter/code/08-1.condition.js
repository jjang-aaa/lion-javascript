/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

/*
if ('ㅎ') {
  console.log('문자열에 값이 들어가있으면 트루입니다');
} else {
  console.log('문자열에 값이 없으면 펄스입니다');
}
*/

/*
let result = prompt('자바스크립트의 공식 이름은 무엇일까요?', '').toLowerCase();

if (result === 'ecmascript') {
  console.log('정답입니다');
} else {
  console.log('모르셨나요?');
}
*/

/*
let value = prompt('숫자를 입력해 주세요', '숫자');

if (value > 0) {
  console.log(1);
} else if (value < 0) {
  console.log(-1);
} else {
  console.log(0);
}
*/

/*
let aa = 2;
let bb = 1;

// let result = aa + bb < 4 ? '미만' : '이상';

function adjustalaks(a, b) {
  // if (a + b < 4) {
  //   return '미만'
  // } else {
  //   return '이상'
  // }
  a + b < 4 
  ? return '미만';
  : return '이상';

  console.log(result);
}
*/

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
//let didWatchMovie = 'no';

// 영화 볼거니?
//let goingToWatchMovie = 'yes';

/* 내가 만들어본 코드
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?');

if (!didWatchMovie) {
  console.log('안봤어');

  let goingToWatchMovie = confirm('영화 보러 갈꺼니?');

  if (goingToWatchMovie) {
    let togeter = confirm('같이 볼 사람 있어?');

    if (togeter) {
      console.log('그래, 재밌게 봐');
    } else {
      let goTogeter = confirm('나랑 같이 볼래?');

      if (goTogeter) {
        console.log('고마워 사랑해');
      } else {
        console.log('그래.....');
      }
    }
  }
} else {
  console.log('봤어');

  let alone = confirm('너 혼자 봤니?');

  if (alone) {
    let didCry = confirm('너 울었니....?');

    if (didCry) {
      console.log('너.. 찌질했네...');
    } else {
      console.log('너 T야?');
    }
  }
}
*/

/* 선생님 코드
// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?','');
// 영화 볼거니?



if(!didWatchMovie){
  
  // 영화 볼거니?
  let goingToWatchMovie = confirm('영화 볼거니?');  
  
  if(goingToWatchMovie){
    let withWho = prompt('누구랑 볼거니?','');

    if(withWho === '여자친구'){
      console.log('zzz');
    }else if(withWho === '가족'){
      console.log('화목하네');
    }else{
      console.log('재밌게보구와~~~~');
    }
  }

}else{
  let alone = confirm('너 혼자 봤니?');
  
  if(alone){
    let didCry = confirm('너 울었니..?');

    if(didCry){
      console.log('너..찌질했네..');

    }else{
      console.log('너 T야?');
    }
  }
}
*/

// if 문(statement)
/*
if (didWatchMovie === 'yes') {
  console.log('무슨 영화 봤어?');
} else if (goingToWatchMovie === 'yes') {
  console.log('나랑 영화보러 갈래?');
} else {
  console.log('그래....');
}
*/

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
