function isFuckingIe (url = 'https://www.google.com/intl/en/chrome/browser/desktop/') {
  if (navigator.userAgent.indexOf('MSIE')!==-1
  || navigator.appVersion.indexOf('Trident/') > 0) {
    alert('Please don\'t use the fucking ie!')
    window.location.href = url
  }
}

export default isFuckingIe
