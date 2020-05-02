import BasePath from 'path'

class Path {

  static trim(path) {
    return this.relative('', path)
  }

}

Object.setPrototypeOf(Path, BasePath)

export { Path }
