import * as data from "../../appconfig.json"

export class Configutils{

    getEnv(){
        return data.env
    }

    geturl(){
        return data[this.getEnv()].url
    }
}