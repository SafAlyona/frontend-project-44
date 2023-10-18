import readlineSync from 'readline-sync';

function hello() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
}

function start(){
  hello()
}

export {start}
