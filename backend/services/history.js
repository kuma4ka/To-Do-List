class History {
    history = [];

    getHistory(){
        return this.history;
    }
    add(option){
        this.history.push(option);
    }
    deleteHistory(){
        this.history.splice(0, this.history.length);
    }

}
const instanceHistory = new History();

module.exports = instanceHistory;