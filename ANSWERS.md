- [x] Why would you use class component over function components (removing hooks from the question)?
	- Class components give you control over what happens to your component throughout its lifecycle. This includes when mounting, unmounting, or changed.

- [x] Name three lifecycle methods and their purposes.
	- `render` - defines what is initially rendered to the dom whe the component mounts
	- `componentDidMount` - this runs after a component is successfully rendered to the DOM
	- `componentDidUpdate` - runs as the component is being updated (after initial mount and usually due to a change in state)

- [x] What is the purpose of a custom hook?
	- Custom hooks allow for extended usage of the react-lifecycle from within a functional component.

- [x] Why is it important to test our apps?
	- Testing gives you confidence that your code works as it should. It can also tell you exactly which part of your application is broken if anything does go wrong which can save lots of time debugging.
