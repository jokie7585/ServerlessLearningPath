
function add(a, b, cb) {
    let c = a + b;
    cb(c);
}


add(2,3, (result) => {
    console.log(result);
});