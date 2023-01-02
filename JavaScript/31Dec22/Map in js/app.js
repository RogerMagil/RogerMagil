let map = new Map();

map.set("Navin", "java");
map.set("Kavin", "React");
map.set("Chirag", "JS");

for(let [k,v] of map) {
    console.log(k, ":", v);
}
// console.log(map.get("Navin"));