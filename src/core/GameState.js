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

const sampleData = {
    "s": 1,
    "bId": "13",
    "wat": 1500,
    "isF": "T",
    "bt": 1701340338526,
    "mx": [
        "2", "2", "9",
        "3", "5", "9",
        "2", "9", "4",
        "3", "9", "2",
        "A", "B", "B"
    ],
    "pl": ["9;1500.0000;4;1;15"],
    "wa": 1500,
}