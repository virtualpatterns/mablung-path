import _URL from "url";import Test from 'ava';

import { Path } from '../../index.js';

const FilePath = _URL.fileURLToPath(import.meta.url);

Test('Path.trim(path)', test => {
  test.is(Path.trim(FilePath), Path.join('release', 'test', 'library', 'path.test.js'));
});
//# sourceMappingURL=path.test.js.map