export const addItemInStorage = (item?: string): void => {
    const dataFromStorage = localStorage.getItem('listOfCities');
    if (!dataFromStorage) {
      localStorage.setItem('listOfCities', JSON.stringify(['Kyiv', 'Kharkiv', 'Chernihiv']));
    }
    const toDosFromStorage = JSON.parse(localStorage.getItem('listOfCities') || '[]');
    if (!!item) {
      localStorage.setItem('listOfCities', JSON.stringify([...toDosFromStorage, item]));
    }
};

export const removeItemFromStorage = (arr: string[]): void => {
    localStorage.setItem('listOfCities', JSON.stringify(arr));
};

export const getItemsFromStorage = () => {
    const result = localStorage.getItem('listOfCities');
    if (result) return JSON.parse(result);
};
