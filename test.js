import test from 'ava'
import Cat from './index.js'

const cat = new Cat()

test('exports', t => {
  t.is(cat.init, 'hello world')
})
