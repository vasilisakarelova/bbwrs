;(function () {
  function handleShare(e) {
    e.preventDefault()

    var URL = 'https://www.facebook.com/sharer.php?u=' + e.currentTarget.href
    var w = 550
    var h = 450
    var top = (window.innerHeight / 2) - (h / 2)
    var left = (window.innerWidth / 2) - (w / 2)

    window.open(
      URL,
      '',
      'height=' + h + ',' +
      'width=' + w + ',' + 
      'top=' + top + ',' +
      'left=' + left + ',' +
      'toolbar=0, location=0, menubar=0, directories=0, scrollbars=0'
    )
  }

  u('.ref-share-button').on('click', handleShare)
})()