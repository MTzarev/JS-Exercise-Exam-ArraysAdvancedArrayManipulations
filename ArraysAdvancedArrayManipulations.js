function arrayManipulation(input) {
    let array = input.shift().split(' ');

    for (let command of input) {
        let splitedCommand = command.split(' ');

        if (splitedCommand[0] === "Add") {
            array.push(splitedCommand[1]);
        } else if (splitedCommand[0] === "Remove") {
            let num = splitedCommand[1];
            array = array.filter(item => item !== num);
        } else if (splitedCommand[0] === `RemoveAt`) {
            let idx = splitedCommand[1];
            array.splice(idx, 1);
        } else if (splitedCommand[0] === "Insert") {
            let numToInsert = splitedCommand[1];
            let idxToInsert = splitedCommand[2];
            array.splice(idxToInsert, 0, numToInsert);
        }
    }

    console.log(array.join(' '));
}


arrayManipulation(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);