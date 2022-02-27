import { Path } from '@virtualpatterns/mablung-path'
import Test from 'ava'

const FilePath = __filePath

Test('trim(\'...\')', (test) => {
  test.is(Path.trim(FilePath), Path.relative('', FilePath))
})
