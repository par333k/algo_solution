/**
 * @typedef Person
 *
 * @property {number} age
 * @property {string} city
 * @property {string | string[]} [pet]
 **/

/** @type {Person[]} */
const people = [
    {
        age: 20,
        city: '서울',
        pet: ['cat', 'dog'],
    },
    {
        age: 40,
        city: '부산',
    },
    {
        age: 31,
        city: '대구',
        pet: ['cat', 'dog'],
    },
    {
        age: 36,
        city: '서울',
    },
    {
        age: 27,
        city: '부산',
        pet: 'cat',
    },
    {
        age: 24,
        city: '서울',
        pet: 'dog',
    }
]

/**
 *  A. 30대 미만이 한 명이라도 사는 모든 도시
 *  B. 각 도시별로 개와 고양이를 키우는 사람들의 수
 */

function solveAModern() {
    const result = people.filter((person => person.age < 30)).map((person) => person.city)
    const answer = new Set(result);
    return Array.from(answer);
}

//console.log(solveAModern());

function solveB() {
    const result = {};
    for (const person of people) {
        const { city, pet: petOrPets } = person;
        if (petOrPets) {
            const petsOfCity = result[city] || {}
            console.log(petsOfCity, city);
            if (typeof petOrPets === 'string') {
                const pet = petOrPets;

                const origNumPetsOfCity = petsOfCity[pet] || 0;
                petsOfCity[pet] = origNumPetsOfCity + 1;
            } else {
                for (const pet of petOrPets) {
                    const origNumPetsOfCity = petsOfCity[pet] || 0
                    petsOfCity[pet] = origNumPetsOfCity + 1
                }
            }
            console.log(petsOfCity);
            result[city] = petsOfCity
        }
    }
    return result;
}

console.log(solveB())

function solveBModern() {
    return people.map(({ city, pet }) => {
        const pets = (typeof pet === 'string' ? [pet] : pet) || [];
        return {
            city,
            pets,
        }
    }).flatMap(({ city, pets}) => pets?.map((pet) => [city, pet]))
        .reduce((result, [city, pet]) => {
            const memo =  {
                ...result,
                [city]: {
                    ...result[city],
                    [pet]: (result[city]?.[pet] || 0) + 1,
                }
            }
            return memo;
        },{})
}

//console.log(solveBModern());
