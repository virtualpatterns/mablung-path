import { Path } from '@virtualpatterns/mablung-path'
import Test from 'ava'

const FilePath = __filePath

Test('trim(\'...\')', (test) => {
  test.is(Path.trim(FilePath), 'release/test/library/path.test.js')
})
