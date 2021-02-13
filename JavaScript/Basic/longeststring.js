// function megaFriend(array)
//   {
//     var longestName = array[0].length;
//     var answer = array[0];
//     for (var i = 1; i < array.length; i++) {
//         var longest = array[i].length;
//         if (longest > longestName) {
//             ans = array[i];
//             longestName = longest;
//         }
//     }
//     return answer;
// }
// result=megaFriend(["Fatin" ,"Sheehab"]);
// console.log(result);

function megaFriend(array)
  {
    var longestName = array[0].length;
    var output = array[0];
    for (var i = 1; i < array.length; i++) {
        var maximum = array[i].length;
        if (maximum > longestName) {
            output = array[i];
            longestName = maximum;
        }
    }
    return output;
}
console.log(megaFriend(["ab", "a", "abcd"]));
console.log(megaFriend(["fatin", "sheehab", "ab"]));
