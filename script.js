//your JS code here. If required.
const count=document.getElementById("counter")
const btn=document.getElementById("incrementBtn")

function increment(){
	let cnt=Number(count.textContent)
	alert(cnt)
	cnt++
	count.textContent=cnt
}
