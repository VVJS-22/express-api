const fs = require("fs");
const PATH = "./data.json";

class Posts {
    readData() {
        try {
            return JSON.parse(fs.readFileSync(PATH, 'utf8'));
        }catch (e) {
            console.log(e);
            return "Not found";
        }
    }

    get() {
        return this.readData();
    }
}

module.exports = Posts;