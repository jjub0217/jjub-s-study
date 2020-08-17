

const nick = ['이쁜이', '애기', '이쁘니', '세지니'];

const boyFriend = {
    name: '오세진',
    age: 33,
    nickName: nick,
    'good-night-word': '뿅! ',
    'morning-word': '잘잤능가',
    company: '굿닥', 
    'Desired-company' : '스타일쉐어',
    say: function said() {
        console.log(this['good-night-word'] + this['morning-word']);
    },
    hisCompany(){
        console.log('세지니는 꼭 ' + this.company + '에서 ' + this[ 'Desired-company'] + '로 이직 성공할거야!');
    }
}

console.log(boyFriend.nickName); // [ '이쁜이', '애기', '이쁘니', '세지니' ]
boyFriend.say(); // 뿅! 잘잤능가
boyFriend.hisCompany(); // 세지니는 꼭 굿닥에서 스타일쉐어로 이직 성공할거야!



