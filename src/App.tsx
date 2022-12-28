import { useState } from "react";
import "./App.css";
import { Circle } from "./components/circle";

export interface Circles {
  x: number;
  y: number;
}

function App() {
  const [circlesArray, setCirclesArray] = useState<Circles[]>([]);
  const [history, setHistory] = useState<Circles[]>([]);

  function handleScreenClick(event: any): void {
    const coordinates: Circles = {
      x: event.clientX,
      y: event.clientY,
    };
    setCirclesArray([...circlesArray, coordinates]);
    setHistory([]);
  }

  function handleUndoClick(): void {
    const newArr: Circles[] = [...circlesArray];
    const addToHistory = newArr.pop();
    if (newArr !== undefined) {
      setCirclesArray(newArr);
    }
    if (addToHistory !== undefined) {
      setHistory([...history, addToHistory]);
    }
  }

  function handleRedoClick(): void {
    const newHistory: Circles[] = [...history];
    const backTo = newHistory.pop();
    if (backTo !== undefined) {
      const newArr: Circles[] = circlesArray;
      newArr.push(backTo);
      setCirclesArray(newArr);
    }
    if (history !== undefined) {
      setHistory(newHistory);
    }
  }

  function renderCircles(): JSX.Element[] {
    return circlesArray.map((circle: Circles) => {
      return Circle(circle.x, circle.y);
    });
  }

  return (
    <div className="App">
      <button className="btn-undo" onClick={handleUndoClick}>
        Undo
      </button>
      <button className="btn-redo" onClick={handleRedoClick}>
        Redo
      </button>
      <div className="field" onClick={handleScreenClick}>
        {renderCircles()}
      </div>
    </div>
  );
}

export default App;
