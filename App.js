import React, { useState } from "react";
import Mouse from "./components/Mouse";
import Forma from "./components/Form";
import Drag from "./components/Drag";
import "./App.css";

const exercises = [
  {
    name: "Exercise 1. Mouse events",
    component: Mouse,
  },
  {
    name: "Exercise 2. Form events",
    component: Forma,
  },
  {
    name: "Exercise 3. Drag events",
    component: Drag,
  },
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState(0);

  const SelectedExerciseComponent = exercises[selectedExercise].component;

  return (
    <div className="App">
      {exercises.map((exercise, index) => (
        <button onClick={() => setSelectedExercise(index)} key={index}>
          {exercise.name}
        </button>
      ))}
      <SelectedExerciseComponent />
    </div>
  );
}

export default App;
