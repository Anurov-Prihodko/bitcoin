const resultBtn = document.getElementById('get_result')

resultBtn.addEventListener('click', amountBit)

function amountBit() {
  let getPrice = document.getElementById('get_price').value
  let getDollar = document.getElementById('get_dollar').value
  let note = document.getElementsByClassName('note')
  let showResult = document.getElementById('show_result')

  if (!getPrice || !getDollar) {
    showResult.innerHTML = 0
    return
  }

  if (isNaN(+getPrice) || isNaN(+getDollar)) {
    document.getElementById('get_price').value = ''
    document.getElementById('get_dollar').value = ''

    showResult.innerHTML = 0
    alert('Input must be a number!')
    return
  }

  showResult.innerHTML = (+getDollar / +getPrice).toFixed(7)
}
