import test from 'ava'
import picker from './'

test('main', t => {
  const obj = {
    foo: 'bar',
    bar: 'baz',
    baz: undefined,
    zoo: ''
  }

  t.deepEqual(picker(obj, ['foo', 'barbee', 'baz', 'zoo']), {
    foo: 'bar',
    baz: undefined,
    zoo: ''
  })
})
