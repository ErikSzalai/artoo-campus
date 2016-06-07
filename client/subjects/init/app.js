// define app module
var app = angular
.module('artooInit', [])
.run(function () {
    console.info('I run in the setter!');
});

angular
.module('artooInit')
.run(() => {
    console.info('I run in the getter!');
});

app.run(function () {
    console.info('I run in the module in the var!');
});
// define a run function