import Test from 'ava'

import { Path } from '../../index.js'

const FilePath = __filePath

Test('Path.trim(path)', (test) => {
  test.is(Path.trim(FilePath), 'distributable/test/library/path.test.js')
})
