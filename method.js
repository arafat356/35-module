const student = {
    name: 'Tom and jerry',
    id: 34,
    balance: 5000,
    major: 'English',
    isRich: false,
    subject: ['bangla', 'ecocomics', 'math 101', 'calcus'],
    bestFriend: {
        name: 'Nahida',
        major: 'mathematices',

    },
    takeExame: function() {
        console.log(this.name, 'taking exame')
    },
    treatDey: function(expense, boksis) {
        this.balance = this.balance - expense - boksis;
        return this.balance;
    }
}

student.takeExame();
const reaming = student.treatDey(500, 39);
const reaming2 = student.treatDey(500, 37);
console.log(reaming, reaming2);