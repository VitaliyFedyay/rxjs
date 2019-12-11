const { fromEvent } = require('rxjs')
const { debounceTime } = require('rxjs/operators')

let buttonClick = document.querySelector('button')
let typeEvent = document.getElementById('input')

fromEvent(buttonClick, 'click')
  .pipe(debounceTime(1000))
  .subscribe(res => typeEvent.innerHTML = `Type of event: ${res.type}` )