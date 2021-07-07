const greet =(message, ...subjects) => console.log(message + ' '+ subjects.join(', '));

greet('Hi', 'Developers', 'Geeks');