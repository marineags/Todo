import { useState, useEffect } from "react";
// ⚠️ne pas l'oublier
type Priority = "Urgente" | "Moyenne" | "Basse";

type Todo = {
  id: number;
  text: string;
  priority: Priority;
};

function App() {
  // gerer le changement d'etat d'une variable : seter donner une valeur a l'input : on presice la valeurs par default
  const [input, setInput] = useState<string>("");
  // select contient les priority
  const [priority, setPriority] = useState<Priority>("Moyenne");
  const savedTodos = localStorage.getItem("todos");
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  // cle et valeurs localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    // trim permet de vérifier si l'input contient autre chose que des espaces
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(), // on récupère la date actuelle
      text: input.trim(), // propre
      priority: priority, // valeur du select
    };

    const newTodos = [newTodo, ...todos]; // on ajoute en premier
    setTodos(newTodos);

    // reset des champs
    setInput("");
    setPriority("Moyenne");

    console.log(newTodos);
  }

  return (
    //pour que le formulaire soit centrer
    <div className="flex justify-center">
      {/* pour la taille : rounded pour les  arrondits :p padding */}
      <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2x1">
        <div className="flex gap-4">
          {/* vient de daisy ui : w-full pour que sa prenne la largeur */}
          <input
            type="text"
            className="input w-full"
            placeholder="Ajouter une tâche..."
            value={input}
            // fonction anonym E : on passe la nouvelle valeur a input
            onChange={(e) => setInput(e.target.value)}
          />
          <select
            className="select w-full"
            value={priority}
            // faut que se soit une des 3 valeurs sauf qu'on va dis as priority "en gros tkt ce que je te donne cest priority "
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            <option value="Urgente">Urgente</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
          <button onClick={addTodo} className="btn btn-primary">
            ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
