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
				console.br();
				console.line();
				console.log('Command was imported successfully');
				console.line();
				console.br();
			}
		},

	//	==============================
	//	<<<<<<<< duplicateCmd >>>>>>>>
	//	==============================
		duplicateCmd:{
			description: 'Both util.readline and util.console api files have a command with this name. The order you listed the APIs to use/merge will determine which one is kept and which will be overwritten.',
			syntax:[`${__cmd('duplicateCmd')}`],
			aliases:[
				'duplicate',
				'dupe',
				'dupeCmd'
			],
			execute(){
				console.log(uC.r);
				console.info(`Both util.readline and util.console command API files include a command with this name.${uC.r}\n`);
				console.info(`In the example script that uses both command APIs, the order in which the APIs are listed in the include/merge function will determine which one is kept and which will be overwritten.${uC.r}\n`);

				console.log(`This version of the command originated from ${uC.bcyn}${uC.i}interactive.api.js${uC.r} in ${uC.bgrn}${uC.i}${uC.b}util.readline${uC.r}.${uC.r}`);
				console.log(`The version from ${uC.bmgt}${uC.i}interactive.api.js${uC.r} in ${uC.bred}${uC.i}util.console${uC.r} either wasn't included or was overwritten by this version.${uC.r}\n`);
			}
		},
	}
};


export default API;
