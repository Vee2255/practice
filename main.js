import {
  calculateBtnHandler,
  clearBtnHandler,
  submitHandler
} from './eventHandler/eventController.js'
import { showBMI } from './util/Ui/bmiUiController.js'

const calculateBtn = document.getElementById('calculateBtn')
const clearBtn = document.getElementById('clearBtn')
const heightInput = document.getElementById('heightInput')
const weightInput = document.getElementById('weightInput')

calculateBtn.addEventListener('click', calculateBtnHandler)
clearBtn.addEventListener('click', clearBtnHandler)
weightInput.addEventListener('keydown', submitHandler)
heightInput.addEventListener('keydown', submitHandler)


const bmiData = JSON.parse(localStorage.getItem('bmiData'))


if (bmiData) {
    weightInput.value =  bmiData.weight
    heightInput.value =  bmiData.height
    showBMI(parseFloat(bmiData.bmi))

}
