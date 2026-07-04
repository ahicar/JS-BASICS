const showPrimes = require('./numeriPrimi');

describe('numeriPrimi', () => {
    test('shows all prime numbers of a number', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        showPrimes(25);
        expect(consoleSpy).toHaveBeenCalledWith(2);
        expect(consoleSpy).toHaveBeenCalledWith(3);
        expect(consoleSpy).toHaveBeenCalledWith(5);
        expect(consoleSpy).toHaveBeenCalledWith(7);
        expect(consoleSpy).toHaveBeenCalledWith(11);
        expect(consoleSpy).toHaveBeenCalledWith(13);
        expect(consoleSpy).toHaveBeenCalledWith(17);
        expect(consoleSpy).toHaveBeenCalledWith(19);
        expect(consoleSpy).toHaveBeenCalledWith(23);
        consoleSpy.mockRestore();
    }) 
}) 
