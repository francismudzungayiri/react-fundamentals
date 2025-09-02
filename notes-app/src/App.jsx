import NoteForm from "./components/NoteForm";

const App = () => {
  return (
    <div className="max-w-lg mx-auto bg-gray-100 mt-10 p-6 mb4 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold text-center"> Notes App</h2>
      <NoteForm />
    </div>
  );
};

export default App;
