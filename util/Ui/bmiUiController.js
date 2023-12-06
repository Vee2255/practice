function showBMI(bmi) {
    removeBMI()
  const bmiBox = document.createElement('div')
  //<div><div>
  bmiBox.setAttribute('Class', 'bmiBox')
  // <div class = "bmiBox"></div>

  const h2 = document.createElement('h2')
  //<h2></h2>
  h2.textContent = 'Your BMI is ...'
  const bmitext = document.createElement('span')
  // <span></span>
  bmitext.setAttribute('id', 'bmiText')
  // <span id = "bmitext"></span>

  bmitext.textContent = bmi.toFixed(2)

  bmiBox.appendChild(h2)
  bmiBox.appendChild(bmitext)
  //เอาไปเป็นลูกตัวล่าสุด

  const bmiContainer = document.querySelector('.bmiContainer')
  bmiContainer.appendChild(bmiBox)
}
function removeBMI() {
  const bmiContainer = document.querySelector('.bmiContainer')
  bmiContainer.innerHTML = ''
}
export {showBMI, removeBMI}