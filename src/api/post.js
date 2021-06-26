const fs = require("fs");
const PATH = "./data.json";

class Posts {
    get() {
        return this.readData();
    }

    readData() {
        try {
            return JSON.parse(fs.readFileSync({"results":[{"name":"suba","gender":"female","place":"gender"},{"name":"suba","gender":"female","place":"gender"},{"name":"Jayesh","gender":"male","place":"erode"},{"name":"Jagan","gender":"male","place":"Namakkal"},{"name":"Lakshmi","gender":"female","place":" Chennai"},{"name":"Kruthika","gender":"female","place":"Madurai"},{"name":"Bharani","gender":"female","place":" Chennai"}]}, 'utf8'));
        }catch (e) {
            console.log(e);
            return `error in json data ${e}`;
        }
    }

    add(newPost) {
        const data = this.readData();
        data.results.unshift(newPost);
        this.storeData(data);
    }

    storeData(data) {
        try {
            fs.writeFileSync(PATH, JSON.stringify(data));
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Posts;