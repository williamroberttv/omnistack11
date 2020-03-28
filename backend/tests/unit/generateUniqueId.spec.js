const generateUniqueId = require('../../src/utils/generateUniqueId');
describe('Generate Unique ID', ()=>{
    it('Should generate a unique ID', ()=>{
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
})