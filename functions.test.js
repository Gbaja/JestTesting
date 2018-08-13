const functions = require("./functions");

beforeAll(()=>initDatabase());
afterAll(()=>closeDatabase())

const initDatabase = () => console.log('Database Initialised');
const closeDatabase = () => console.log("Database closed")

const nameCheck = ()=>console.log('Checking Names...')
describe('Checking Names', () => {
    beforeEach(()=> nameCheck());
    test('User is Jeff', ()=>{
        const user = 'Jeff';
        expect(user).toBe('Jeff')
    })
    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen')
    })
})

test('Adds 2 + 2 to equal 4', () =>{
    expect(functions.add(2,2)).toBe(4);
});

//toBe
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

//tobeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

//toEqual
test('User should be Fatimat Gbajabiamila object', () => {
    expect(functions.createUser()).toEqual({firstName: "Fatimat", lastName: "Gbajabiamila"});
})

//less than and greater than
test('Should be under 1600', ()=>{
    const load1 = 800;
    const load2 = 700;
    expect(load1+load2).toBeLessThanOrEqual(1600)
})

//Regex
test('There is no I in team', () =>{
    expect('team').not.toMatch(/I/i)
})

//Arrays
test("Admin should be in usernames", () =>{
    usernames = ['join', 'karen', 'admin'];
    expect(usernames).toContain('admin')
})

//working with async data-promise
//if you're dealing with async data, make sure you have expect.assertions and return 
test('User fetched name should be Leanne Graham using promises', () =>{
    expect.assertions(1);
     return functions.fetchUser()
        .then(data=>{
            expect(data.name).toEqual("Leanne Graham");
        })
})

//async await
test('User fetched name should be Leanne Graham using async await', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual("Leanne Graham");
    
})