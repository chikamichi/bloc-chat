var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ServerActions = {
    roomListFetched : function(json) { 
        AppDispatcher.handleAction({
            type : AppConstants.ROOM_LIST_FETCHED,
            data : json
        });
    },
    
    messageFetched : function(json) {
        AppDispatcher.handleAction({
            type : AppConstants.MESSAGE_FETCHED,
            data : json
        });
    },
};

module.exports = ServerActions;