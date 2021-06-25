const fs = require("fs");
const PATH = "./data.json";

class Posts {
    get() {
        return this.readData();
    }

    readData() {
        try {
            return JSON.parse(fs.readFileSync(PATH, 'utf8'));
        }catch (e) {
            console.log(e);
            return "Not found";
        }
    }

    add(newPost) {
        const data = this.readData();
        data.unshift(newPost);
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