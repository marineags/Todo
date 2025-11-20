type Priority = "Urgente " | "Moyenne" | "Basse";

type Todo = {
  id: number;
  text: string;
  priority: Priority;
};

function App() {
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
          />
          <select className="select w-full">
            <option value="Urgente">Urgente</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
