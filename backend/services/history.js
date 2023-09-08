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

module.exports = {
    instanceHistory : new History(),
};