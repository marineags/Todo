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
      <div className="w-2/3 flex flex-column"></div>
    </div>
  );
}

export default App;
