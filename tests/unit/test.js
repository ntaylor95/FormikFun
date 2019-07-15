
const assert = require('assert');
module.exports = {
    before: function() {
       console.log('this is a test');
    },    
    'demo UnitTest' : function (done) {
        assert.equal('TEST', 'TEST');
        setTimeout(function() {  
            done();
        }, 10);
    }
};