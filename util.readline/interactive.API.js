import uC, {__cmd} from '../util.console/index.js';


export const API = {
	commands:{
	//	============================
	//	<<<<<<<< importTest >>>>>>>>
	//	============================
		importTest:{
			description: 'Test function to see if this gets imported correctly',
			syntax:[`${__cmd('importTest')}`],
			execute(){
				let str = 'Command was imported successfully';
				console.br();
				console.line();
				console.log(str);
				console.line();
				console.br();
				return str;
			}
		},

	//	==============================
	//	<<<<<<<< duplicateCmd >>>>>>>>
	//	==============================
		duplicateCmd:{
			description: 'Both util.readline and util.console API files have a command with this name. The order you listed the APIs to use/merge will determine which one is kept and which will be overwritten.',
			syntax:[`${__cmd('duplicateCmd')}`],
			aliases:[
				'duplicate',
				'dupe',
				'dupeCmd'
			],
			execute(){
				let str = `${uC.r}
Both util.readline and util.console command API files include a command with this name.${uC.r}
In the example script that uses both command APIs, the order in which the APIs are listed in the include/merge function will determine which one is kept and which will be overwritten.${uC.r}

This version of the command originated from ${uC.bcyn}${uC.i}interactive.API.js${uC.r} in ${uC.bgrn}${uC.i}${uC.b}util.readline${uC.r}.${uC.r}
The version from ${uC.bmgt}${uC.i}interactive.API.js${uC.r} in ${uC.bred}${uC.i}util.console${uC.r} either wasn't included or was overwritten by this version.${uC.r}`;
				console.log(str);
				return str;
			}
		},
	}
};


export default API;
