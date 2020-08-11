function moduleFunction() {
    console.log('This is the function in the module.');
}
function another() {
    console.log('I am another function');
}

module.exports = {
    moduleFunction,
    another
};

// i React: export default moduleFunction
