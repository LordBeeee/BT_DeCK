/**
 * - validation: 
	- age: number?
	- >8, A-Z, a-z, 0-9,  ^a-zA-Z0-9
	- BN98765 (BN998987)
	- 6

-search and replace

	- '090123456abcde' --> '090123456'

	- '090-090-1234' --> '0900901234'

	- 'Phan    Ngoc         Huy' --> 'Phan Ngoc Huy'

	- '090-123.234' --> '090123234'
 */
var st = '093523sgeae'

var result = st.replace(/[^\d]/g, '');



var st = '093-545-5464'

var result = st.replace(/-/g, '');

console.log(result);


var st = 'Phan  Ngoc    Huy'

var result = st.replace(/[ ]+/g, '');


var st = '090-123.234'

var result = st.replace(/[-.]/g, '');

console.log(result);

var st = '32362'

var result = (/[0-9]/g, '');

result.test(st);