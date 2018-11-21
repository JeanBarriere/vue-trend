import { genPoints, genPath } from '../helpers/path'

export default {
  props: ['smooth', 'data', 'fill', 'boundary', 'radius', 'id', 'max', 'min'],

  render (h) {
    const { data, smooth, fill, boundary, radius, id, max, min } = this
    const points = genPoints(data, boundary, { max, min }, fill)
    const d = genPath(points, smooth ? radius : 0)

    return h('path', {
      attrs: { d, fill: `${fill ? fill : 'none'}`, stroke: `url(#${id})` }
    })
  }
}
