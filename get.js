const fs = require("fs");

const text = fs.readFileSync("./source.txt", "utf-8")

const list = text.split("\n")

const obj = {};
for (let i in list) {
    if (list[i].match(/^\d/)) {
        while (list[i].indexOf("  ")!=-1) {
            list[i].replace("  ", " ")
        }
        const split = / (.+)/
        const tag = list[i].split(split)[0];
        const value = list[i].split(split)[1];

        obj[tag] = value;
    }
}
console.log(JSON.stringify(obj))