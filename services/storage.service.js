(function (angular) {

    'use strict';

    var app = angular.module("cricApp");
    app.service('storageService', Constructor);

    function Constructor() {

        var allMatchData;
        var maxId;

        function cloneFromLocalStorage(){
            var stringifiedData = localStorage.getItem('cricCard');
            if (stringifiedData !== null)
                allMatchData = JSON.parse(stringifiedData);
            else allMatchData = {};
        }

        function setMaxId() {
            maxId = 0;
            for (var id in allMatchData) {
                if (parseInt(id) > maxId) {
                    maxId = parseInt(id);
                }
            }
        }

        function updateLocalStorage() {
            var stringifiedData = JSON.stringify(allMatchData);
            localStorage.setItem('cricCard', stringifiedData);
        }

        function updateSingleMatch(id, singleMatchData) {
            allMatchData[id] = singleMatchData;
            updateLocalStorage();
        }

        function createNewMatch(battingTeam, bowlingTeam, maxOvers) {
            var id = ++maxId;
            var singleMatchData = {
                matchId: id,
                battingTeam: battingTeam,
                bowlingTeam: bowlingTeam,
                maxOvers: maxOvers,
                states : {}
            };
            updateSingleMatch(id, singleMatchData);
            return singleMatchData;
        }

        function getSingleMatchDataById(id) {
            return allMatchData[id];
        }

        function getAllMatchData() {
            return allMatchData;
        }

        function init() {
            cloneFromLocalStorage();
            setMaxId();
        }

        init();

        this.createNewMatch = createNewMatch;
        this.updateSingleMatch = updateSingleMatch;
        this.getAllMatchData = getAllMatchData;
        this.getSingleMatchDataById = getSingleMatchDataById;
    }

})(window.angular);