// Write your solution in this file!
var customerName = 'bob';

const leastFavoriteCustomer = "that steve guy"


//upper case function refuses to acknowledge 'bob', have passed this in console and have even set it to return 'BOB' and still it does not register
function upperCaseCustomerName() {
 let capital = customerName.toUpperCase(); 
 return capital;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
} 
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "maybe bob"
} 