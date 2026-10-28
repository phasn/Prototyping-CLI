import uC, {__desc, __sntx, __cmd, __arg} from '../util.console/index.js';


export const API = {
	get(arg){return this[arg];},

	commands:{
	//	======================
	//	<<<<<<<< help >>>>>>>>
	//	======================
		help:{
			description: 'Return a list of commands if no command name is specified.\n\tIf a command is specified, returns information about that command.',
			syntax:[
				`${__cmd('help')}`,
				`${__cmd('help')} ${__arg('COMMAND')}`,
			],
			aliases:[
				'-h',
				'--help',
			],
			execute(cmdName){
				let commands = API.get('commands');
				let tab = API.get('tab');
				let moduleName = API.get('moduleName');

				let str = '';

				if(cmdName){
					let match = commands[Object.keys(commands).find(key => key.toLowerCase() === cmdName.toLowerCase())];
					if(match){
						if(!match.description) match.description = 'No description provided';
						str += __desc(match.description);
						str += `\n${tab()}${uC.cyan}${uC.u}Syntax${uC.xu}:${uC.r}`;
						for(let line of match.syntax) str += `\n${tab()}${__sntx(line)}`;
						console.log(str);
						console.br();
						return str;
					}else{
						let err = `ERROR: '${uC.u}${cmdName}${uC.xu}' is not a known command.`;
						console.error(err);
						return err;
					}
				}

				let line2 = 'Commands';

				let width = Math.max(moduleName.length, line2.length);
				for(let cmdName in commands) width = Math.max(width, cmdName.length);
				width += 4;

				const center = (str, lineWidth) => str.padStart(str.length + (Math.floor((lineWidth - str.length) / 2)), ' ');

				const divider = `\n${tab()}${uC.lcyn}${''.padStart(width, '-')}${uC.r}`;

				str += divider;
				str += `\n${tab()}${uC.lgrn}${center(moduleName, width)}${uC.r}`;
				str += `\n${tab()}${center(line2, width)}:`;
				str += divider;
				// for(let cmdName in commands) if(!commands[cmdName].alias) console.log(`${tab()}${uC.r}${uC.ylw}> ${uC.b}${cmdName}${uC.r}`);
				for(let cmdName in commands) str += `\n${tab()}${uC.r}${uC.ylw}> ${uC.b}${cmdName}${uC.r}`;
				str += divider;

				console.log(str);
				return str;
			},
		},

	//	=======================
	//	<<<<<<<< clear >>>>>>>>
	//	=======================
		clear:{
			description: 'Clears the console',
			syntax:[`${__cmd('clear')}`,],
			execute(){
				console.clear();
			}
		},
	}
};


export default API;
