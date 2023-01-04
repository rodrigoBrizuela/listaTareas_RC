const div_tareas = document.getElementById("div_tareas");

function agregarTarea (){
    const card = document.createElement("div");
    const input_tarea = document.getElementById("input_tarea").value;
    const text_tarea = document.createElement("h6");
    
    if (input_tarea !== ""){
        text_tarea.textContent = input_tarea;

        card.className = "notes";

        card.appendChild(text_tarea);
        div_tareas.appendChild(card);
    } else{
        alert("Debe ingresar una tarea!")
    }

    
}