import axios from "../axios.config.js";

describe('Test Accounts endpoints', () => {
        it('should retrieve all accounts', async () => {
            let response = await axios.get('/account');
            expect(response.status).to.equal(200);
    });
});