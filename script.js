
let taskId = 0;
function addTask() {
    //pega o valor do bagulho
    const input = document.getElementById('input').value.trim();
    //pra sempre que uma tarefa seja criada o botaozinho tenha um id proprio

    if (input) {
        taskId++;
        const taskModel = `<br id='br${taskId}'> <div id='div${taskId}'  class='div-tasks'> <div id='task${taskId}' class='circle'> <img onclick='cmTask(${taskId})' id='img${taskId}' class='img-circle' src='../img/circulo-verde.png'> </div>  <div id='task${taskId}' class='div-rmbutton'> <button id='btn${taskId}' class='rmbutton' onclick='rmTask(${taskId})'>-</button>  </div> <div id='task${taskId}' class='div-text'> <p id='task${taskId}' class='text'>${input}</p> </div> </div>`;

        document.getElementById('div-taskArea').innerHTML += taskModel;
        document.getElementById('input').value = null;
        console.log(document.getElementById(`btn${taskId}`))
    }
}
function rmTask(id) {
    const taskToRemove = document.getElementById(`task${id}`);
    const brToRemove = document.getElementById(`br${id}`);
    const divToRemove = document.getElementById(`div${id}`);
    if (taskToRemove && brToRemove && divToRemove) {
        taskToRemove.remove();
        brToRemove.remove();
        divToRemove.remove();
    }
}

function cmTask(id) {
    const img = document.getElementById(`img${id}`)
    const div = document.getElementById(`div${id}`);
    if (img.src.endsWith("circulo-verde.png")) {
        img.src = '../img/circulopren.png'
        div.style.backgroundColor = 'greenyellow'

    } else {
        img.src = '../img/circulo-verde.png'
        div.style.backgroundColor = 'white'
    }
}

document.getElementById('input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão (submissão do formulário, se houver)
        addTask(); // Chama a função para adicionar a tarefa
    }
});





