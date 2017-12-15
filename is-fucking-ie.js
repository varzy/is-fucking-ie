/**
 * thanks EpokK & Michel Floyd
 * link: https://stackoverflow.com/questions/21825157/internet-explorer-11-detection
 */
(function isFuckingIe () {
  if (navigator.userAgent.indexOf('MSIE')!==-1
  || navigator.appVersion.indexOf('Trident/') > 0) {
    alert('Please don\'t use the fucking ie!')
    window.location.href = 'https://www.google.com/intl/en/chrome/browser/desktop/'
  }
} ())
