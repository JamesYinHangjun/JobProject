var a = 100
function test() {
	a = 100;
	console.log(a)
	console.log(this.a)
	var a
	console.log(a)
}
test()