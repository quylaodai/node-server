export class GameState {
    constructor({ gameData }) {
        this.gameData = gameData;
        const { gameId, eventId, serverVersion } = gameData;
    }

    triggerSpinRequest(betId, betLines) {

    }
    triggerFreeSpinRequest() {

    }
    triggerRespinRequest() {

    }
    triggerMiniGame(openCell) {

    }
    triggerFreeSpinOption(option) {

    }
    _generateData() {

    }
    _fireEventStateUpdated(dataRes) {
        this.gameData.stateUpdate(dataRes);
    }


}
