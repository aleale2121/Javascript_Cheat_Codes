import { FREEZING_POINT, celsiusToKelvin } from './4exporting_from_module';
const fpInK = celsiusToKelvin(FREEZING_POINT);

//resolve conflict

/**
 Suppose we have a home module with a Thermostat class, as well as a temperature
module with a Thermostat class, and a module imports Thermostat from both the
temperature module and the home module, like so:
import { Thermostat } from './temperature';
import { Thermostat } from './home';
This will result in a fatal error:
import { Thermostat } from './home';
^^^^^^^^^^
SyntaxError: Identifier 'Thermostat' has already been declared
One approach to resolve this is to import at least one of the references as a
different name.
import { Thermostat } from './temperature';
import { Thermostat as HomeThermostat } from './home';
Alternatively, you can import the exports from one of the modules into a
namespace object, like so: 

import { Thermostat } from './temperature';
import * as home from './home';
console.log(Thermostat);
console.log(home.Thermostat);

//Importing a Default Export

import { default as uom } from './temperature';

import uom from './temperature';

//Importing Both Default and Named Exports

import uom, { celsiusToKelvin, FREEZING_POINT as brrr } from './temperature';

//Importing Everything into a Namespace

import * as heat from './temperature';
const fpInK = heat.celsiusToKelvin(heat.FREEZING_POINT);

import uom, * as heat from './temperature';
*/