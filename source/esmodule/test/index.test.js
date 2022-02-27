import Test from 'ava'

;[
  'Path'
].forEach((name) => {

  Test(name, async (test) => {
    test.truthy(await import('@virtualpatterns/mablung-path').then((module) => module[name]))
  })
  
})
