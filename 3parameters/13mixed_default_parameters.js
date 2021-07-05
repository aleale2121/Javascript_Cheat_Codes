const badFetchData = function(
    location = { host: 'localhost', port: 443 },
    id,
    uri = 'employees') {
    console.log('Fetch data from https://' +
    location.host + ':' + location.port + '/' + uri);
};

// The badFetchData() function also has three parameters, like the fetchData() function;
//  however, the first and last parameters have default values while the
// middle one is a regular parameter. Since a value for id is expected, the users
// of the function may either have to give a value for location or use the unpleasant undefined as an argument, like so:

badFetchData(undefined, 4, 'magazines');