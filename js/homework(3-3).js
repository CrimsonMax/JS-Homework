// 3. Напишите функцию deepEqual, которая принимает два
// значения и возвращает true, только если это два
// одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их сравнивать
// рекурсивным вызовом deepEqual.
// Чтобы узнать, когда сравнивать величины через ===, а
// когда – объекты по содержимому, используйте оператор
// typeof. Если он выдаёт "object" для обеих величин, значит
// нужно делать глубокое сравнение. Примите во внимание
// одно дурацкое исключение, существующее по
// историческим причинам: typeof null тоже возвращает
// "object".

function deepEqual(obj1, obj2) {
    if (typeof obj1 == typeof obj1) {
        if (typeof obj1 == "object" && obj1 != null) {
            let equals = true;
            for (let property in obj1) {
                if (obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property)) {
                    if (!deepEqual(obj1[property], obj2[property])) {
                        equals = false;
                    }
                } else {
                    equals = false;
                }
            }
            return equals;
        } else {
            return obj1 === obj2;
        }
    } else {
        return false;
    }
}


let obj1 = 'bob';
let obj2 = 'bob1';
console.log (deepEqual(obj1, obj2));

// Тут тоже нагуглил код.
// Но в итоге вроде всё понятно.