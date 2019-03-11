describe("pow", function() {
  
	describe("возводит x в степень n", function(){
		
		function makeTest(x) {
			var expected = x * x * x;
			
			it(x + " в степени 3 равно: " + expected, function() {
				assert.equal(pow(x, 3), expected);
			});
		}
		for (var x = 1; x < 6; x++) {
		makeTest(x);
		}
		
	});
	
	it("при возведении в отрицательную степень результат NaN", function() {
		assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
  });

  it("при возведении в дробную степень результат NaN", function() {
		assert(isNaN(pow(2, 1.5)), "pow(2, 1.5) не NaN");
  });
	//...другие тесты и подблоки describe
});