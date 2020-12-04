module.exports = async function (context, req) {

    // 當console印出這行代表我們託管的function被執行了。
    context.log('\n!!!Azure is running myFuction!!!\n');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? 'Hello, ' + name + '. This function executed successfully.'
        : 'function executed successfully. Pass a name in the query string or in the request body for a personalized response.';

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
};