import readlineSync from 'readline-sync';
import { store } from './store.js';

function hello() {
  console.log('Welcome to the Brain Games!')
  store.name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${store.name}!`)
}

function start(){
  hello()
}

export {start}
