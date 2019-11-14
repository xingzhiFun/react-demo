'use strict';

function sum(a, b) {
    return a + b;
}

test('react', () => {
    expect(sum(1, 2)).toBe(3);
});
