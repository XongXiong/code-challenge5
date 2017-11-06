app.service('MessagesService', function ($http) {
    console.log('MessagesService loaded');
    var self = this;

    self.messages = {data: []};

    self.refreshMessages = function() {
        $http.get('/messages').then(function (response) {
            console.log('Getting messages success');
            self.messages.data = response.data;
            console.log(self.messages);
        }).catch(function (error) {
            console.log('Error getting messages');
        });
    }

    self.addMessage = function (newMessage) {
        $http.post('/messages', newMessage).then(function (response) {
            console.log('Message posting successful');
        }).catch(function (error) {
            console.log('Failed to post message');
        });
    };
});