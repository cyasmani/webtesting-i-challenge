const { repair } = require('./enhancer.js');
const enhancer = require('./enhancer.js');
// test away!

const hobbit = {
    name: 'Frodo',
    durability: 18,
    enhancement: 15
}
test('initialtest', () => {
    expect(true).toBe(true)
})

describe("Test repair", () => {
    it('durability should be 100', () => {
        expect(() => {

            enhancer.repair(hobbit.durability).toBe(hobbit.durability === 100)

        })
        
    })
})

describe("Test success", () => {
    it('enhancement should increase by 1', () => {
        expect(() => {
            enhancer.success(hobbit).toBe(hobbit.enhancement === 11)
        })
    })
    it('enhancement should remain the same if lvl 20', () => {
        expect(() => {
            enhancer.success(hobbit).toBe(hobbit.enhancement === 20)
        })
    })
})

describe("Test failure", () => {
    it('if enhancement is less than 15, durability should decrease by 5', () => {
        expect(() => {
            enhancer.fail(hobbit).toBe(hobbit.durability === 13)
        })
    })

    it('if enhancement is 15 or more, durability is decreased by 10', () => {
        expect(() => {
            enhancer.fail(hobbit).toBe(hobbit.durability === 8)
        })
    })

    it('if enhancement is 16 or more, decrease enhancement by 1', () => {
        expect(() => {
            enhancer.fail(hobbit).toBe(hobbit.durability === 17)
        })
    })


})