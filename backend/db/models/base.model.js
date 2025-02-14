class BaseModel{
    constructor(database,collectionName){
        this.database=database;
        this.collection=collectionName;
    }
    async create(data){
        return await this.collection.create(this.collection,data);
    }

}

export default BaseModel;