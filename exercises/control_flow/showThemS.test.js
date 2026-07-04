const showStars = require ('./showThemS');

describe ('showStars', () => {
    test ('show numbers of stars in each row', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        showStars(5);
        expect(consoleSpy).toHaveBeenCalledTimes(5);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '*');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '**');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '***');
        expect(consoleSpy).toHaveBeenNthCalledWith(4, '****');
        expect(consoleSpy).toHaveBeenNthCalledWith(5, '*****');
        consoleSpy.mockRestore();
    }) 
})
