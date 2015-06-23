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
  static post(route, params) {
    return fetch(route + '.json', _.merge({
      method: 'post',
      credentials: 'include',
      headers: this.headers()
    }, {body: JSON.stringify(params)} ))
  }
}
export default Api;
