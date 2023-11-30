const findTheOldest = function(people) {
    let getAge = function(birth, death) {
        if(!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    }
    let getElder = function(oldestPerson,currentPerson) {
        let oldestAge = getAge(oldestPerson.yearOfBirth,oldestPerson.yearOfDeath);
        let currentAge = getAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);
        return (currentAge > oldestAge) ? currentPerson : oldestPerson;
    }
    return people.reduce(getElder);
};

// Do not edit below this line
module.exports = findTheOldest;
