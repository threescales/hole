declare var require
/* istanbul ignore next */
/* tslint:disable */
export default {
  path: 'article',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../containers/article-list-page').default)
    })
  }
}
