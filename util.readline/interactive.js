import {API as exampleAPI}	from './interactive.api.js';
import {initRL, useAPIs}	from '../index.js';

let API = {moduleName:'Readline Utils'};
API = useAPIs(API, exampleAPI);
initRL(API);
