const div_tareas = document.getElementById("div_tareas");
const btn_agregarTarea = document.getElementById("btn_agregarTarea");
const btn_Limpiar = document.getElementById('btn_limpiar');

btn_agregarTarea.addEventListener(`click`,agregarTarea);
btn_Limpiar.addEventListener(`click`, limpiarLista);

let listaDeTareas = [];

function agregarTarea() {
    const input_tarea = document.getElementById("input_tarea");
    const tarea = input_tarea.value;
  
    if (tarea !== "") {
      const card = document.createElement("div");
      const div_p = document.createElement("div");
      const div_btn = document.createElement("div");
      const class_card = "col-6 col-sm-6 col-md-4 col-lg-3 notes";
  
      const text_tarea = document.createElement("p");
  
      const btn_eliminar = document.createElement("button");
  
  
      text_tarea.textContent = tarea;
      text_tarea.className = "p_tarea";
      div_p.className = "div_p";
      div_btn.className = "div_btn";
  
      card.className = class_card;
      btn_eliminar.textContent = "Eliminar";
      btn_eliminar.className = "btn_eliminar";
      btn_eliminar.addEventListener(`click`, () => eliminarTarea(card))

  
      div_p.appendChild(text_tarea);
      div_btn.appendChild(btn_eliminar);
      card.appendChild(div_p);
      card.appendChild(div_btn);
      div_tareas.appendChild(card);
  
      listaDeTareas.push(tarea);
      localStorage.setItem('tareas', listaDeTareas);
  
    } else {
      alert("Debe ingresar una tarea!")
    }
  
    input_tarea.value = "";
    input_tarea.focus();
  }

function eliminarTarea(card) {
    div_tareas.removeChild(card);
}

function limpiarLista() {
    listaDeTareas = [];
    div_tareas.innerHTML = '';
    localStorage.clear();
  }

  function recargarTareas() {
    const arrTareas = localStorage.getItem('tareas').split(',');
    const task = document.getElementById("input_tarea");
    for (i = 0; i < arrTareas.length; i++) {
      task.value = arrTareas[i];
      agregarTarea();
    };
  };
  
  
  recargarTareas();