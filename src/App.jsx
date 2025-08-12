import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Note from "./components/note";
import notes from "./components/notes.js";

function App() {
  //const notes = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <>
      <main className="h-[95vh]">
        <Header />
        <div className="w-full flex flex-row flex-wrap ">
          {notes.map((noteCard) => {
            return (
              <Note
                key={noteCard.key}
                title={noteCard.title}
                content={noteCard.content}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
