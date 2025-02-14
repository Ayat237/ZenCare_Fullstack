import mongoose from "mongoose";
import IDatabase from "./interfaces/IDatabase.js";


class MongooseDatabase extends IDatabase{
    constructor(uri){
        super();
        this.uri=uri;
        this.model={};
    }

    async connect(){
        try{
            await mongoose.connect(this.uri);
            console.log("Database connected successfully");
            
        }catch(error){
            console.error("Error in database connection:", error.message);
            throw error;
        }
    }
    async disconnect(){
        try {
            await mongoose.disconnect(this.uri);
            console.log("Database disconnected successfully");
        } catch (error) {
            console.error("Error in database disconnection:", error.message);
            throw error;
        }
    }
}

export default MongooseDatabase;