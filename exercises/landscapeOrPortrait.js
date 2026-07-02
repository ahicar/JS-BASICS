function isLandscape(width, height) {
    return width > height;
}

function isLandscapeTwo(width, height) {
    if (width > height) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isLandscape, isLandscapeTwo };