module.exports = class Pangram {
    constructor(sentence) {
        this.sentence = sentence;
    }

    isPangram() {
        const sentenceArray = this.sentence.split("");
        let counterLetters = 0;
        
        for (let i = 65; i < 91; i++) {
           let exists = sentenceArray.find((char, index) => {
                let charValue = this.sentence.charCodeAt(index);
                return charValue === i || charValue === i + 32;
           });

            if (exists) {
                counterLetters++;
            }
        }
        return counterLetters === 26 ? true : false;
    }
}