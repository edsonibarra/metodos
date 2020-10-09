//CREO UN OBJETO CON EL NOMBRE DEL METODO A IMPLEMENTAR DENTRO
//DENTRO DEL OBJETO CREO EL METODO CON UN ARROW FUNCTION.
//EXPORTAR


export const forEachObject = {
    forEachEdson: (array, callback) => {
        for(let i = 0; i < array.length; i++) {
            callback(array[i]);
        }
    }
}

export const filterObject = {
    filterEdson: (array, callback) => {
        let arrayForFiltered = [];
        for(let i = 0; i < array.length; i++) {
            if(callback(array[i]) === true) {
                arrayForFiltered.push(array[i]);
            }
        }
        return arrayForFiltered;
    }
}

export const findObject = {
    findEdson: (array, callback) => {
        for(let i = 0; i < array.length; i++) {
            if(callback(array[i])){
                return array[i];
                break;
            }
        }
    }
}

export const mapObject = {
    mapEdson: (array, callback) => {
        let arrayForMapped = [];
        for(let i = 0; i < array.length; i++) {
            arrayForMapped.push(callback(array[i]));
        }
        return arrayForMapped;
    }
}

export const findIndexObject = {
    findIndexEdson: (array, callback) => {
        let testArray = [];
        for(let i = 0; i < array.length; i++) {
            if(callback(array[i])) {
                testArray.push(i);
                return testArray[0];
                break;
            }
        }
        if(testArray.length === 0) {
            return -1;
        }
    }
}

export const containsObject = {
    containsEdson: (dataStructure, element) => {
        let testArray = [];
        for(let i = 0; i < dataStructure.length; i++) {
            if(element === dataStructure[i]) {
                testArray.push(dataStructure[i])
                return element === dataStructure[i];
            }
        }
        if(testArray.length === 0) {
            return testArray != 0;
        }
    }
}

//Suponinedo que por list se refiere a un arreglo en JS y que este tiene objetos dentro de un solo nivel.
//Accedi a cada elemento con posision y despues con braket notation. 
export const pluckObject = {
    
    pluckEdson: (array, property) => {
        let pluckArray = [];
        for(let i = 0; i < array.length; i++) {
            pluckArray.push(array[i][property]);
        }
        return pluckArray;
    }
}

export const withoutObject = {
    withoutMethodEdson: (array, ...items) => {
        let itemsToMatch = [...items];
        for(let i = array.length - 1; i >= 0; i--){
            for(let j = 0; j < itemsToMatch.length; j++) {
                if(array[i] === itemsToMatch[j]) {
                    array.splice(i,1);
                } else {
                    //nothing happens
                }
            }
        }
        return array;
    } 
}
