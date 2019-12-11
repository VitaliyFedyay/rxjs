import { fromEvent } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

let button = document.getElementById('button')
let input = document.getElementById('input').innerHTML

fromEvent(button, 'click').pipe(debounceTime(2000)).subscribe(res => input = res )