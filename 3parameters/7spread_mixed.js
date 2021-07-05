const mixed = function(name1, name2, ...names) {
    console.log('name1: ' + name1);
    console.log('name2: ' + name2);
    console.log('names: ' + names);
};
mixed('Tom', ...['Jerry', 'Tyke', 'Spike']);