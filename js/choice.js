function Calculator() {
	var a, b, answer;
	
	this.read = function () {
		a = +prompt ( "a?", 0 );
		b = +prompt ( "b?", 0 );
	}
	this.sum = function () {
		answer = a + b;
		return answer;
	}
	this.mul = function () {
		answer = a * b;
		return answer;
	}
}

