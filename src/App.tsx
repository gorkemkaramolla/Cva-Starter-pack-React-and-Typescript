import "./App.css";
import Button from "./components/Button";
import { useRef } from "react";
function App() {
    const handleClick = () => {
        alert("clicked");
    };
    const buttonRef = useRef<HTMLButtonElement>(null);
    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center">
            <Button
                onClick={handleClick}
                ref={buttonRef}
                variant={"danger"}
                size={"large"}
            >
                Click
            </Button>
        </div>
    );
}

export default App;
