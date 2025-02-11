# React Events
Called **"synthetic event"** since it's a react wrapper around actual DOM events.  React did this to solve some browser inconsistentsies; all browsers will use the same React events so our code will not have to change.  

Key features of React Events:
* React creates a pool of SyntheticEven objects to improve performance
* Events are normalized to work same on all browsers
* React Events wrap around native events and the native events are exposed through react events interface



## Same Properties as Native Events
See the console log of `event` and `event.nativeEvent`
```jsx
function Button() {
  const handleClick = (event) => {
    console.log(event); // Logs a SyntheticEvent, not a native DOM event
    console.log(event.nativeEvent); // Accesses the original native event
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

We can still see the properties like `event.target` , `event.type`, `event.stopPropagation()`

## React Event Pooling
> This is for React <17.  17+ Does not pool syntheticevents


React pools events for performance.  Pooling events means after an event handler executes, the event object is reused and its properties become nullified.  We can see this with:
```jsx
function Button() {
  const handleClick = (event) => {
    console.log(event.type); // "click"
    setTimeout(() => {
      console.log(event.type); // Will be null or undefined
    }, 1000);
  };

  return <button onClick={handleClick}>Click Me</button>;
```

## Preventing Default Behavior
Some elements (e.g. forms, links) trigger default actions
| Common Element  | Default Action      |
| --------------- | ------------------  |
| `<a>`             |    navigate to href |
| `<input type="text">` | text input, or submit if inside form and user presses enter |
| `<input type="checkbox">` or radio | Check or toggle input |

To prevent a form submitting for example we could do:
```jsx
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
```

Prevent right click:
```jsx
function preventContextMenu(event) {
  event.preventDefault();
  alert("Right-click disabled!");
}

<div onContextMenu={preventContextMenu}>Right-click here</div>;
```

## Event Bubbling and Capturing
Like native events, react events bubble up the dom tree.  Event start at the target element and propagate upward.

```jsx
function ParentChild() {
  const handleParentClick = () => console.log("Parent Clicked");
  const handleChildClick = () => console.log("Child Clicked");

  return (
    <div onClick={handleParentClick} style={{ padding: 20, background: "lightgray" }}>
      <button onClick={handleChildClick}>Click Me</button>
    </div>
  );
}
```

If we click the button this will print both
```
Child Clicked
Parent Clicked
```

We can stop bubbling (propagation) with `event.stopPropagation()`
```jsx
function Button() {
  const handleClick = (event) => {
    event.stopPropagation();
    console.log("Button Clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

## UseEffect
```jsx
useEffect(() => {
  // Side effect logic
}, [dependencies]);
```
* The callback function inside useEffect runs after the component renders.
* The dependency array determines when the effect should re-run.

Empty array dependencies ([]) will run only on mount
```jsx
useEffect(() => {
  console.log("Runs only once after the initial render!");
}, []);
```
This particularly useful when your component adds event listeners or timers that you want to cleanup on dismount
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running...");
  }, 1000);

  return () => {
    clearInterval(timer); // Cleanup function
    console.log("Timer stopped!");
  };
}, []);
```
* The effect runs once on mount
* The cleanup function runs when the componenet unmounts, stopping the timer.

### Lifecycle Phases in React
React components go through three main phases.  I like to think of useEffect more as a way to tap into these phases.

* Mounting (Component is created and inserted into DOM)
  * useEffect(..., [])
* Updating (Component re-renders due to state/prop change)
  * useEffect(..., [state])
* Unmounting (Component is removed from the DOM)
  * useEffect(() => { return function }); return a cleanup function, cleanup functions are always called on unmount 

> NOTE: In class component you can tap into these phases by overriding the functions `componentDidMount()`, `componentWillUnMount()`, and `render()`

### useEffect Summary
* useEffect allows React components to handle side effects (API calls, event listeners, timers, etc.).
* The dependency array controls when the effect runs.
* Always clean up effects when necessary to prevent memory leaks.
* Optimize performance by avoiding unnecessary re-renders.