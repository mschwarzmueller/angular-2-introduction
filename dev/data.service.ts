export class DataService {
    private _data = ['Milk', 'Sugar', 'Bread'];

    getRandomData() {
        return this._data[Math.floor(Math.random() * this._data.length)];
    }

    insertData(data: string) {
        this._data.push(data);
    }
}