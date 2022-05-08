export const addItemInStorage = (item: string): string[] => {
    const dataFromStorage = localStorage.getItem('listOfCities');
    const arrFromStorage = JSON.parse(dataFromStorage || '[]');
    const result = [...arrFromStorage, item]
    localStorage.setItem('listOfCities', JSON.stringify(result));
    return result;
};

export const removeItemFromStorage = (arr: string[]): void => {
    localStorage.setItem('listOfCities', JSON.stringify(arr));
};

export const getItemsFromStorage = () => {
    const dataFromStorage = localStorage.getItem('listOfCities');
    const initValue = ['Kyiv', 'Kharkiv', 'Chernihiv'];
    if (dataFromStorage) {
      return JSON.parse(dataFromStorage);
    }
    localStorage.setItem('listOfCities', JSON.stringify(initValue));
    return initValue;
};
