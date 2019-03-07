/**
###
### File by FellGill
### Last edition : 06/03/2019; 18:51
###
### Sharding Manager file
###
### Logs disabled (Except for the launch)
###
**/

/*** Modules ***/
const fs = require("fs");
const yaml = require("yaml");
const discord = require('discord.js');

/*** Extra ***/
const log = require('./handlers/logHandler');

/*** Config ***/
const file = fs.readFileSync("./config.yml", "utf8");
const { shardCount, MainScript } = yaml.parse(file);

/*** Sharding Manager ***/
const manager = new discord.ShardingManager('./'+MainScript);

/*** Spawner ***/
manager.spawn(shardCount);

/*** Logs ***/
manager.on('launch', shard => {
  log.info(`Launching Shard ${shard.id} [ ${shard.id + 1} of ${manager.totalShards} ]`);
});