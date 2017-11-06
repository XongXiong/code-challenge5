app.controller('MessagesController', ['MessagesService', function (MessagesService) {
    console.log('MessagesController created.');

    var mc = this;
    mc.newMessage = {};
    mc.messages = MessagesService.messages;
    mc.showAdd = false;

    mc.showInput = function() {
        mc.showAdd = !mc.showAdd;
    };

    mc.refreshMessages = function() {
        MessagesService.refreshMessages();
        console.log(mc.messages);
    }

    mc.addMessage = function(newMessage) {
        MessagesService.addMessage(newMessage);
        mc.refreshMessages();
    };

}]);