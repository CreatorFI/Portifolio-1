function megaFriend(array) {

    //First Checking which is the longest value in the array. 
    var longestName = array[0].length;
    //keeping the longest value
    var longest = array[0];
    for (var i = 0; i < array.length; i++) {
        var maximum = array[i].length;
        if (maximum > longestName) {
            output = array[i];
            longestName = maximum;
        }
    }
    console.log(longest);
}
megaFriend(['abc', 'a', 'ab', 'abcd'])
