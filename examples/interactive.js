import {API as readlineAPI}	from '../util.readline/interactive.api.js';
import {API as consoleAPI}	from '../util.console/interactive.api.js';
import {initRL, useAPIs}	from '../index.js';

let API = {moduleName:'Readline&Console Utils'};
API = useAPIs(API, readlineAPI, consoleAPI);
initRL(API);
