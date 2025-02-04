import React from "react";
import MainLayout from "./layouts/MainLayout";


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

const Events = () => {
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
            </div>
        </MainLayout>
    );
};

export default Events;
