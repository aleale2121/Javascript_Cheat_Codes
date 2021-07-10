import { right } from './right';
import { middle } from './middle';
middle();
right();
/*
The left module loads the two modules, right and middle, and imports the variables
right and middle from the right and middle modules, respectively. Finally, the left
module calls the two functions referenced by the middle and right variables.

Let’s focus on who loads the right module in this example. First, when the file
containing the left module is executed, it appears to load the right module. Then
when the left module loads middle, the middle module in turn appears to load
the right module on its first line. You may wonder if that means the right module
file will be loaded twice. Thankfully, no. JavaScript modules are managed
smartly—a module is loaded only once when the first import is seen in the
execution control flow. If a module has already been loaded, a request to load
it is skipped, but any variables we import are assigned to the proper references. To verify this behavior, run the left module; remember to include the
necessary command-line option.
node --experimental-modules left.mjs
The output from the code is
(node:78813) ExperimentalWarning: The ESM module loader is experimental.
executing right module
executing middle module
middle called
right called
*/