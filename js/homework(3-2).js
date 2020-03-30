// 2. Список
// Объекты могут быть использованы для построения
// различных структур данных. Часто встречающаяся
// структура – список (не путайте с массивом). Список –
// связанный набор объектов, где первый объект содержит
// ссылку на второй, второй – на третий, и т.п. (как раз в последней ссылке из полезного эта структура описана)
// Напишите функцию arrayToList, которая строит такую
// структуру, получая в качестве аргумента [1, 2, 3], а также
// функцию listToArray, которая создаёт массив из списка.
// Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где
// этот элемент добавлен спереди к первоначальному
// списку, и функцию nth, которая в качестве аргументов
// принимает список и число, а возвращает элемент на
// заданной позиции в списке или же undefined в случае
// отсутствия такого элемента.
// Если ваша версия nth не рекурсивна, тогда напишите её
// рекурсивную версию.

function arrayToList(arr) {
    let i = 0;
    while (arr[i]) {
        if (i == (arr.length - 1)) {
            return {value: arr[i], next: null};
        } else {
            return {value: arr[i], next: arrayToList(arr.slice(++i))};
        }
    }
}
let list = arrayToList([1, 2, 3]);
console.log(list);

function listToArray(list) {
    if (list.next == null) {
        return [list.value];
    } else {
        return [list.value].concat(listToArray(list.next));
    }
}

list1 = listToArray(list);
console.log(list1);

function prepend(num, list) {
    return {value: num, next: list};
}

console.log(prepend(0, list));

function nth(list, pos) {
    if (list == null) {
        return undefined;
    } else {
        if(1 == pos) {
            return list.value;
        } else {
            return nth(list.next, --pos);
        }
    }
}

console.log(nth(list, 3)); 

// Самое мозголомное задание.
// Решение нагуглил :(
// Условие показалось предельно абстрактным, и это запутывало ещё больше.