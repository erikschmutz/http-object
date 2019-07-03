const httpCodes = require("./httpCodes")
/* Simple class which allows for easy HttpResponse handeling*/
class HttpRespons{
    /**
     * Creates a Object and sets the correct values based on
     * the wikipedia site for HTTP-responses.
     * 
     * Contains:
     *       message    ~ Which is a custom message created by
     *                    user.
     *       statusCode ~ Which is the status code provided by
     *                    the user. Should comply with the 
     *                    HTTP standard.
     *       status     ~ Text represention of the status code
     *       object     ~ Optional extra object to append to the
     *                    class.
     * 
     * @param {*} message Custom message for the object
     * @param {*} statusCode Status code of the event.
     * @param {*} object <Optional> Extra object which can is appended
     */
    constructor(message, statusCode, object) {
        this.message = message;
        this.statusCode = statusCode;
        this.status = httpCodes[statusCode];

        for (let i in object) {
            this[i] = object[i]
        }
        
    }
}

module.exports = HttpRespons;