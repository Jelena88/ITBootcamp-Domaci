var number = 0;

for(let i=1; i<=100; i++){
number = number + i;
      if (i%3 == 0 && i%5 == 0)
            console.log('FizzBuzz');
      else if (i%3 == 0 && i%5 != 0)
            console.log('Fizz');
      else if (i%3 != 0 && i%5 == 0)
            console.log('Buzz');
      else if (i%3 != 0 && i%5 != 0)
            console.log(i);
    
  }
  