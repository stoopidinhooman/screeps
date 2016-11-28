/*
Module to control the harvester role
 */
 
module.exports  = {

    /** @param {Creep} creep, {Spawn} spawn **/
    run: function(creep, spawn) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
        	//Try to transfer the energy to spawn, if it doesnt move to the spawn
            if(creep.transfer(Game.spawns[spawn], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns[spawn]);
            }
        }
	}
}
