app.service('MessagesService', function ($http) {
    console.log('MessagesService loaded');
    var self = this;

    self.messages = { data: [] };

    self.refreshMessages = function () {
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
            self.refreshMessages();
        }).catch(function (error) {
            console.log('Failed to post message');
        });
    };

    self.deleteData = function (dataId) {
        if (confirm('Are you sure you want to delete this?')) {
            $http.delete('/messages/' + dataId).then(function (response) {
                console.log('Message Deleted');
                self.refreshMessages();
            }).catch(function (err) {
                console.log('Failed to delete message');
            });
        }
    };

});