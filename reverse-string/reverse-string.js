
module.exports = {
reverseString: (string) => {
        const stringArray = string.split("");
        let resverseString = '';
        for (let i = stringArray.length - 1; i >= 0; i--){
            resverseString = resverseString.concat(stringArray[i]);
        }
        return resverseString;
    }
}