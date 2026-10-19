import {API as mainAPI}		from './interactive.api.js';
import {initRL, useAPIs}	from '../index.js';

let API = {moduleName:'Console Utils'};
API = useAPIs(API, mainAPI);
initRL(API);
