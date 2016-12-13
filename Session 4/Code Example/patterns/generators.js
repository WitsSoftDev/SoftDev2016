//Using ES6 generators

var co = require('co');

function getUser(userId) {
    return new Promise(function(resolve, reject) {
        User.findOne({ _id: userId }, function(err, user) {
            /* istanbul ignore next */
            if (err) {
                return reject(err);
            }

            resolve(user);
        });
    });
}

function processUser(userId) {
    var user;
    var parent;

    co(
        user = yield getUser(userId);
        parent = yield getUser(user.parentId);
    );
}
