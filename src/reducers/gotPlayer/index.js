import { combineReducers } from 'redux';
import playerReducer, { getPlayer } from 'reducers/gotPlayer/player';
import matches, { getPlayerMatches } from 'reducers/gotPlayer/matches';
import peers, { getPlayerPeers } from 'reducers/gotPlayer/peers';
import heroes, { getPlayerHeroes } from 'reducers/gotPlayer/heroes';
import pros, { getPlayerPros } from 'reducers/gotPlayer/pros';
import rankings, { getPlayerRankings } from 'reducers/gotPlayer/rankings';
import winloss, { getWinLoss } from 'reducers/gotPlayer/winloss';
import records, { getPlayerRecords } from 'reducers/gotPlayer/records';
import counts, { getPlayerCounts } from 'reducers/gotPlayer/counts';

export default combineReducers({
  playerReducer,
  matches,
  heroes,
  pros,
  rankings,
  winloss,
  peers,
  records,
  counts,
});

const player = {
  ...getPlayer,
  ...getWinLoss,
};

export {
  player,
  getPlayerMatches as playerMatches,
  getPlayerPeers as playerPeers,
  getPlayerHeroes as playerHeroes,
  getPlayerPros as playerPros,
  getPlayerRankings as playerRankings,
  getPlayerRecords as playerRecords,
  getPlayerCounts as playerCounts,
};