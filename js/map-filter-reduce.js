


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Use .filter to create an array of user objects where each user
// object has at least 3 languages in the languages array.
let AlotOflanguages = users.filter(function (user) {
    if(user.languages.length >= 3 ) {
        return true
    }
    return false


})
// console.log(AlotOflanguages);
//Use .map to create an array of strings where each element is a user's
// email address
let AlotOfEmails = users.map(function(user) {
    return (user.email)


});
console.log(AlotOfEmails)
//Use .reduce to get the total years of experience from the list of
// users. Once you get the total of years you can use the result to
// calculate the average.
let totalYears = users.reduce((accumulation, yearOfExperience) => {
    return accumulation + yearOfExperience.yearsOfExperience

},0);
console.log(totalYears/users.length)

// Use .reduce to get the longest email from the list of users
const LongestEmail = users.reduce((LongestEmailSoFar, user) => {
    if(user.email.length > LongestEmailSoFar.length){
      return user.email
    }
    return LongestEmailSoFar;
},"");
console.log(LongestEmail)




// Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
allUserName = users.reduce((allUserNameSoFar, user) => {
   return allUserNameSoFar + user.name + ",";
},"");
// let allUserNames = users.reduce((allUserNameSoFar, user) => {
//    return allUserNameSoFar.push(user.name)
// },"");





console.log(allUserName)
//bonus Use .reduce to get the unique list of languages from the list of users.
//
// let uniqueLanguages = users.reduce(function (uniqueSoFar , user) {
//     for(let language of user.languages){
//         uniqueSoFar.add(language)
//         return uniqueSoFar;
//     }, new Set());
//     console.log(uniqueLanguages);
// })()