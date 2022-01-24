import { Modal } from "./components/Modal/Modal";
import { useState } from "react";


function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <h1>Hello World</h1>
          <button onClick={() => setOpen(!open)}>Show Modal?</button>
          <Modal open={open} onClose={() => setOpen(false)}>
            Test Modal
          </Modal>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
