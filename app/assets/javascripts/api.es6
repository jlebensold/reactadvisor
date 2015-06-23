class Api {
  static token() {
    let el = document.querySelector('meta[name="csrf-token"]');
    return el ? el.getAttribute('content') : '';
  }
  static headers() {
    return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-Token': this.token(),
    'X-Requested-With': "XMLHttpRequest"
    };
  }
  static put(route, params) {
    return this.xhr(route, params, 'put');
  }

  static get(route, params) {
    return this.xhr(route, params, 'get');
  }
  static post(route, params) {
    return this.xhr(route, params, 'post');
  }

  static xhr(route, params, verb) {
    return fetch(route + '.json', _.merge({
      method: verb,
      credentials: 'include',
      headers: this.headers()
    }, {body: JSON.stringify(params)} ))
  }
}
export default Api;
