import request from 'request';
function webHook(){
    var headers = {
        'Content-Type': 'application/json'
    };
    
    var dataString = '{"text": "This is a line of text in a channel.\nAnd this is another line of text."}';
    
    var options = {
        url: 'https://hooks.slack.com/services/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',
        method: 'POST',
        headers: headers,
        body: dataString
    };
    
    function callback(error, response, body){
        if (!error && response.statusCode === 200) {
            console.log(body);
        }
    }
    console.log("send to slack");
    request(options, callback);
}
export default webHook;