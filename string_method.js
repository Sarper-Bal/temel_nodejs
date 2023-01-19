
var a = 'test'

console.log(a[0])
console.log(a.charAt(0))

var b = 'merhaba Dünya'

console.log(b.indexOf("a", 5))
console.log(b.lastIndexOf("a"))

//kontrol
console.log(b.startsWith("haba", 3))
console.log(b.endsWith("Dün", 11))

console.log(b.includes("haba Dün"))

//stirng parçalama
console.log(b.slice(1))
console.log(b.substring(1,5))

//büyük küçük harf çefirme;
console.log(b.toUpperCase())
console.log(b.toLowerCase())

//boşluk silme
var c = " 12331 "
console.log(c.trim())
