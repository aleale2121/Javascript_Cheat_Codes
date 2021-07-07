'use strict';

{
  const greet = (subject) => console.log('Hello ' + subject);

  setTimeout(greet.bind(null, 'Earthling'), 2000);
}

{
  const greet = subject => console.log('Hello ' + subject);

  setTimeout(greet.bind(null, 'Earthling'), 2000);
}