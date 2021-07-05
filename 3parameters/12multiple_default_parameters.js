const fetchData = function(
    id,
    location = { host: 'localhost', port: 443 },
    uri = 'employees') {
    console.log('Fetch data from https://' +
    location.host + ':' + location.port + '/' + uri);
};

fetchData(1, { host: 'agiledeveloper', port: 404 }, 'books');
fetchData(1, { host: 'agiledeveloper', port: 404 });
fetchData(2);


// Fetch data from https://agiledeveloper:404/books
// Fetch data from https://agiledeveloper:404/employees
// Fetch data from https://localhost:443/employees

fetchData(3, undefined, 'books');
//Fetch data from https://localhost:443/books

// JavaScript permits passing undefined, and that has a special horror effect.
// Here are the JavaScript rules:
// • If a good value is passed to the default parameter, then that given value
// is used.
// • If null is passed, then the value for the parameter is null—fair deal. So, don’t
// pass null; after all, null is a smell.
// • If undefined is passed, however, then the default value is given to the
// parameter in place of undefined.