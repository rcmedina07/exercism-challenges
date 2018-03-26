
module.exports = class Bob {
    hey(question) {
        if (question.toUpperCase() === question && /[A-Z]/.test(question)) {
            return 'Whoa, chill out!';
        } else if (question.match(/\?\s*$/)) {
            return 'Sure.';
        } else if (!question || question.match(/^\s*$/)) {
            return 'Fine. Be that way!';
        }
        return 'Whatever.';
    }
}