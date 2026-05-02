function generateQuestions(){

const role = document.getElementById("roleInput").value.trim()
const container = document.getElementById("questions")

if(role === ""){
container.innerHTML = "Please enter a job role."
return
}

const templates = [

`What are the key responsibilities of a ${role}?`,
`What skills are required to become a successful ${role}?`,
`Explain a challenging project you worked on as a ${role}.`,
`How do you stay updated with the latest trends in ${role}?`,
`What tools and technologies do you use as a ${role}?`,
`How do you handle problem solving in your role as a ${role}?`,
`Describe your workflow when working as a ${role}.`,
`What are common mistakes beginners make in ${role}?`,
`How would you improve performance in a ${role} project?`,
`Why should we hire you as a ${role}?`

]

container.innerHTML=""

templates.forEach(q => {

const div = document.createElement("div")

div.className = "question-card"

div.innerText = q

div.onclick = () => {
navigator.clipboard.writeText(q)
alert("Question copied!")
}

container.appendChild(div)

})

}