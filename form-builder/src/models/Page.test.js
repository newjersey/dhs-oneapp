import Page from './Page.js';

describe('/models/Page', () => {

    describe('create', () => {

        test('should return data', async () => {
    
            // Create a new page
            let page = new Page();
            await page.save();
                
            console.log('type = ', page.type)
            expect(page.type).toBe('text');
            expect(page.required).toBe(true);
            expect(typeof page._id).toBe('string');
    
            return;
    
        });


    });
    


});