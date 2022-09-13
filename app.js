const resultBtn = document.getElementById('get_result')

resultBtn.addEventListener('click', amountBit)

function amountBit() {
  let getPrice = document.getElementById('get_price').value
  let getDollar = document.getElementById('get_dollar').value
  let showResult = document.getElementById('show_result')

  if (!getPrice || !getDollar) {
    showResult.innerHTML = 0
    return
  }

  showResult.innerHTML = (+getDollar / +getPrice).toFixed(7)

  // clean the inputs:
  //   document.getElementById('get_price').value = ''
  //   document.getElementById('get_dollar').value = ''
}
