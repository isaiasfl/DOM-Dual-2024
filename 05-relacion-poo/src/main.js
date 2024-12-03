// testing de los ejercicios POO
//  ############## --------- Ejercicio 1---- ##############
// --- funciones contructoras ---
import { Tarea, TareaClass } from "./helpers/Ejercicio1";
const tarea1 = new Tarea("Aprender JavaScript");
const tarea2 = new Tarea("Aprender React");
tarea1.info(); // La tarea Aprender JavaScript está pendiente
tarea1.toggleCompletada();
tarea1.info(); // La tarea Aprender JavaScript está completada
tarea2.info(); // La tarea Aprender React está pendiente

// --- Clases ---
const tarea1Clases = new TareaClass("Aprender JavaScript Clases");
const tarea2Clases = new TareaClass("Aprender React Clases");
tarea1Clases.info(); // La tarea Aprender JavaScript está pendiente
tarea1Clases.toggleCompletada();
tarea1Clases.info(); // La tarea Aprender JavaScript está completada
tarea2Clases.info(); // La tarea Aprender React está pendiente
