const sum = require('./sum');

test("Add 1 + 2 to be equal 3", ()=> {
    expect(sum(1, 2)).toBe(3);
});