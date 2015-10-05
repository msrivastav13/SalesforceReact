var AccountView = require('./AccountView');
console.log('ALO ALOs');
var Account = React.render(
    <AccountView pollInterval={2000}/>,
    document.getElementById('content')
);