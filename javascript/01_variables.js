const accountId = 083412258
let accountEmail = "ghulam@google.com"
var accountPassword = "1994"
accountCity = "Sibi"
let accountState;

// accountId = 2 // cannot change the variable value which declared constant
accountEmail = "gm@gm.com"
accountPassword = "1888"
accountCity = "Quetta"

console.log(accountId);

/* variable declared as VAR cannot be used because it has some scope problem and it is considered as global variable */

console.table([accountId, accountEmail, accountCity, accountState]);

