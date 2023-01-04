const div_tareas = document.getElementById("div_tareas");
const btn_agregarTarea = document.getElementById("btn_agregarTarea");

btn_agregarTarea.addEventListener(`click`,agregarTarea);

function agregarTarea (){
    const card = document.createElement("div");

    const input_tarea = document.getElementById("input_tarea");
    const tarea = input_tarea.value;

    const text_tarea = document.createElement("h6");

    const btn_eliminar = document.createElement("button");
    
    if (tarea !== ""){
        text_tarea.textContent = tarea;

        card.className = "notes";
        btn_eliminar.textContent = "Eliminar";
        btn_eliminar.className = "btn_eliminar";
        btn_eliminar.addEventListener(`click`, () => eliminarTarea(card))

        card.appendChild(text_tarea);
        card.appendChild(btn_eliminar);
        div_tareas.appendChild(card);
    } else{
        alert("Debe ingresar una tarea!")
    }


    input_tarea.value= "";
    input_tarea.focus();
}

function eliminarTarea(card) {
    div_tareas.removeChild(card);
}