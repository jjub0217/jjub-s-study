// switch 문

let month = 11; // '현재는 11월이다.'
let montName; // 숫자 11이 왔을때 노벰버 등으로 영문의 월 이름을 
            // monthName에 할당해주고 싶다.

switch (month) {
    case 1:
        montName = 'January';
        break;
    case 2:
        montName = 'February';
        break;
    case 3:
        montName = 'March';
        break;
    case 4:
        montName = 'April';
        break;
    case 5:
        montName = 'May';
        break;
    case 6:
        montName = 'June';
        break;
    case 7:
        montName = 'July';
        break;
    case 8:
        montName = 'August';
        break;
    case 9:
        montName = 'September';
        break;
    case 10:
        montName = 'October';
        break;
    case 11: // 여기서 month가 11인것과 일치한다. 
        montName = 'November'; //<=  그래서 이 문이 실행된다.
        break;
    case 12:
        montName = 'December';
        break;
    default: // 그 어떤 케이스문에도 부합되지 않는 경우에는 default 문이 실행된다. 
             // default 문은 가장 마지막에 써줘야 한다.   
             // 이때는 break문을 써주지 않아도 된다.   
    monthName = '모르겠어요'
}
console.log(month);

// 폴스루: break가 없으면 폴스루로 인해서 뒤에 있는 case 문이 다 실행된다. 
