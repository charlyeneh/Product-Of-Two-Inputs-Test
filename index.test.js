const calculateProduct = require('./index');
test('Multiply 2 * 2 to equal 4', () => {
	expect(calculateProduct.multiply(2, 2)).toBe(4);
});
