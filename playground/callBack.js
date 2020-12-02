
function add(a, b, cb) {
    let c = a + b;
    cb(c);
}


add(2,3, (result) => {
    console.log(result);
});



// let a = function (result) {
//     console.log(result);
// };

// a('hello world');

// let aObject = {};

// aObject.a = a;
// aObject.a('hello world from aObject.a');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? 'Hello, ' + name + '. This HTTP triggered function executed successfully.'
        : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.';

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
};

// call-back
// object