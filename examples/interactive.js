import {API as readlineAPI}	from '../util.readline/interactive.API.js';
import {API as consoleAPI}	from '../util.console/interactive.API.js';
import {initRL, useAPIs}	from '../index.js';

let API = {moduleName:'Readline+Console Utils'};
API = useAPIs(API, readlineAPI, consoleAPI);
initRL(API);
