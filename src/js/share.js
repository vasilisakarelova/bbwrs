;(function () {
  function handleShare(e) {
    e.preventDefault()

    const URL = 'https://www.facebook.com/sharer.php?u=' + e.currentTarget.href
    const w = 550
    const h = 450
    const top = (window.innerHeight / 2) - (h / 2)
    const left = (window.innerWidth / 2) - (w / 2)

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
})();