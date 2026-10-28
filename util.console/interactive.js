import {API as mainAPI}		from './interactive.API.js';
import {initRL, useAPIs}	from '../util.readline/index.js';

let API = {moduleName:'Console Utils'};
API = useAPIs(API, mainAPI);
initRL(API);
