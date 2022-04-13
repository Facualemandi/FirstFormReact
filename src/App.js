import React from "react";
import { Code } from "./Components/Code";
import { Form } from "./Components/Form";
import { Free } from "./Components/Free";


function App() {
  return (
        <>    
          <main className="main-app">  
             <Code/>
             <section>
                <Free/>
                <Form/>
             </section>
          </main>
        </>
  );
}

export default App;
