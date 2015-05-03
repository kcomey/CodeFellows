var myBitmap = require('../bitmap_header_module.js');
var expect = require('chai').expect;



describe('expect the two properties to be different', function() {

  it('expect transformedColor function to change original object', function () {
    var original = myBitmap.readPalette();

    var transformed = myBitmap.transformPalette();

    expect(transformed).to.not.equal(original);

  });
});





