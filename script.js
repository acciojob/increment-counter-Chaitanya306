//your JS code here. If required.
const count=document.getElementById("count")
const btn=document.getElementById("btn")

function increment(){
	const cnt=Number(count.textContent)
	cnt++
	count.textContent=cnt
}
