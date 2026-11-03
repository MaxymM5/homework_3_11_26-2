function processArray(array, callback) {
    return array.map(callback);
}

function doubleElement(element) {
    return element * 2;
}

function reverseElement(element) {
    return String(element).split('').reverse().join('');
}

console.log(processArray([1, 2, 3, 4, 5], doubleElement));
console.log(processArray(["hello", "world"], reverseElement));

function filterArray(array, callback) {
    return array.filter(callback);
}

function isEven(number) {
    return number % 2 === 0;
}

function isShortWord(word) {
    return word.length <= 4;
}

console.log(filterArray([1, 2, 3, 4, 5], isEven));
console.log(filterArray(["cat", "elephant", "dog", "bird"], isShortWord));

function washDishes() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dishes washed"), 2000);
    });
}

function cleanRoom() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Room cleaned"), 4000);
    });
}

function makeDinner() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dinner is ready"), 7000);
    });
}

washDishes()
    .then(message => {
        console.log(message);
        return cleanRoom();
    })
    .then(message => {
        console.log(message);
        return makeDinner();
    })
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });

function sortArray(array) {
    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            reject("Array is empty");
            return;
        }

        setTimeout(() => {
            resolve([...array].sort((a, b) => a - b));
        }, 2000);
    });
}

sortArray([5, 2, 8, 1, 3])
    .then(result => console.log(result))
    .catch(error => console.error(error));

function multiplyAsync(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b)) {
            reject(new Error("Invalid values"));
            return;
        }

        setTimeout(() => {
            resolve(a * b);
        }, 2000);
    });
}

async function mainTask5() {
    try {
        const result = await multiplyAsync(6, 9);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

mainTask5();

function sortArrayAsync(array) {
    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            reject(new Error("Array is empty"));
            return;
        }

        setTimeout(() => {
            resolve([...array].sort((a, b) => a - b));
        }, 2000);
    });
}

async function main() {
    try {
        const result = await sortArrayAsync([5, 2, 8, 1, 3]);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

main();