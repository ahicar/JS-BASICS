const {calculateGrade, calculateAverage} = require('./gradesCalc');

describe('gradesCalc', () => {
    test('calculates average from array of 81, 85, 55', () => {
        const marks = [81, 85, 55];
        expect(calculateAverage(marks)).toBeCloseTo(73.67, 2);
    });

    test('calculates grade based on array with one value', () => {
        expect(calculateGrade([75])).toBe('C');
    });
});

