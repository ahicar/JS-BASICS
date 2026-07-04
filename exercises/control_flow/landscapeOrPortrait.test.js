
const {isLandscape, isLandscapeTwo} = require ('./landscapeOrPortrait');

describe ('landscapeOrPortrait', () => {
    test('isLandscape returns true for width greater than height', () => {
        expect(isLandscape(800, 600)).toBe(true);
    });

    test('isLandscape returns false for width less than height', () => {
        expect(isLandscape(600, 800)).toBe(false);
    });

    test('isLandscapeTwo returns true for width greater than height', () => {
        expect(isLandscapeTwo(800, 600)).toBe(true);
    });

    test('isLandscapeTwo returns false for width less than height', () => {
        expect(isLandscapeTwo(600, 800)).toBe(false);
    });
});


