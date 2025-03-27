//your JS code here. If required.
const count=document.getElementById("count")
const btn=document.getElementById("btn")

function increment(){
	let cnt=Number(count.textContent)
	alert(cnt)
	cnt++
	count.textContent=cnt
}
