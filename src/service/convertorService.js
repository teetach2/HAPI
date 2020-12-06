
export const convertDataToParentChildern = (body) => {
    const jsonInputArray = formatInput(body);
    return processJsonData(jsonInputArray);
}

export const formatInput = (body) => {
    let index = 0;
    let isFinished = false;
    let formatInputArray = [];
    while(!isFinished) {
        const itemArray = JSON.parse(JSON.stringify(body))[index];
        if(itemArray?.length > 0 ) {
            formatInputArray = formatInputArray.concat(itemArray);
        } else {
            isFinished = !isFinished;
        }
        index++;
    }
    return formatInputArray;
}

export const processJsonData = (jsonInputArray) => {
    const resultArray = [];

    // Sort input by level
    jsonInputArray.sort((a, b) => parseInt(a.level) - parseInt(b.level));
    
    jsonInputArray.forEach((input) => {
        if (input.level == 0) {
            resultArray.push(input);
        } else {
            // Loop finding the parent
            traverseArray(resultArray, input);
        }
    });

    return resultArray;
}

export const traverseArray = (resultArray, inputItem) => {
    if (resultArray?.length > 0) {
        resultArray.forEach(parent => {
            if (parent.id == inputItem.parent_id) {
                parent.children.push(inputItem)
            } else {
                traverseArray(parent.children, inputItem);
            }
        })
    }
    return resultArray;
}