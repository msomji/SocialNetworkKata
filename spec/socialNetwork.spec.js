let test = require('../src/socialNetwork')


describe('Social Network', () => {
  it('test should return initial commit', () => {
    expect(test()).toBe('initial commit')
  })
})