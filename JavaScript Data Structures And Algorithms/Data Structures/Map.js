const map =new Map([['a',5],['b',10]])
map.set('c',15)
console.log(map.has('c'))
console.log(map.size)
map.clear()
for(const [key,value] of map){
    console.log(` ${key}: ${value}`)
}