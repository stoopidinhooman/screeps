var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function() {
	//loop for every creeps in game
	for(var name in Game.creeps){
		var creep = Game.creeps[name];

		//run roleHarvester if it is the harvester
		if(creep.memory.role == 'harvester'){
			roleHarvester.run(creep, 'Base');
		}
		
		//run roleHarvester if it is the upgrader
		if(creep.memory.role == 'upgrader'){
			roleUpgrader.run(creep);
		}

	}
}