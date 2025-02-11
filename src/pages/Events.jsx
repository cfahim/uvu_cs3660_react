import React from "react";
import MainLayout from "./layouts/MainLayout";
import { useEffect, useState } from "react";


const EasyButton = () => {
    const handleClick = (event) => {
        alert("That was easy!");
        console.log(event); // Logs a SyntheticEvent, not a native DOM event
        console.log(event.nativeEvent); // Accesses the original native event
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>Easy Button</button>
    );
}

const EventArgsButton = ({ name, age }) => {
    const handleClick = (event, name, age) => {
        alert(`Hello from ${name}! You are ${age} years old.`);
    };

    return <button className="btn btn-primary" onClick={(e) => handleClick(e, name, age)}>The Goat</button>;
}

const EventPreventDefault = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page reload
        alert("Form Submitted!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    );
}

const preventContextMenu = (event) => {
    event.preventDefault();
    alert("Right Click Disabled!");
}


const UseEffectRenderAndMount = ({ id }) => {
    const [renderCount, setRenderCount] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
          console.log("Timer running...");
        }, 1000);
      
        return () => {
          clearInterval(timer); // Cleanup function
          console.log("Timer stopped!");
        };
      }, []);
  
    useEffect(() => {
      console.log(`Component ${id} Mounted`);
  
      return () => {
        console.log(`Component ${id} Unmounted`);
      };
    }, []);
  
    useEffect(() => {
      console.log(`Component ${id} Rendered - Render Count: ${renderCount}`);
    });
  
    return (
      <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
        <h2>Component {id}</h2>
        <p>Renders: {renderCount}</p>
        <button onClick={() => setRenderCount((prev) => prev + 1)}>Re-render</button>
      </div>
    );
  };


const Events = () => {
    const [components, setComponents] = useState([]);

    // Function to add a new component
    const addComponent = () => {
        setComponents((prev) => [...prev, <UseEffectRenderAndMount id={prev.length} key={prev.length} />]);
    };

    // Function to remove the most recently added component
    const removeComponent = () => {
        setComponents((prev) => prev.slice(0, -1));
    };
    
    return (
        <MainLayout title="Eventing | MyPage">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Easy Event</h2>
                        <EasyButton />
                    </div>
                    <div className="col">
                        <h2>Event Args</h2>
                        <EventArgsButton name="Helen Mirren THE GOAT" age="79" />
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col" onContextMenu={preventContextMenu}>
                        <h2>Preventing Default</h2>
                        <EventPreventDefault />
                    </div>
                </div>
                <div className="row">                    
                    <div className="col">
                        <h2>UseEffect Render and Mount</h2>
                        <button className="btn btn-primary" onClick={addComponent}>Add Component</button>
                        <button className="btn btn-danger" onClick={removeComponent} disabled={components.length === 0}>
                            Remove Component
                        </button>
                        <div>{components}</div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Events;
