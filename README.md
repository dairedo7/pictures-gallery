This project was created for learning purposes only.

The projects contains the gallery, which includes search-by-word technique, where life-cycle method componentDidUpdate checks, whether or not the page or the input value was updated and fetches pictures from pixabay RESTful API.
Fetching of the html requests are held using axios library.
Class components are only used where they're absolutely needed to make it possible to change the state of the components (such as in Modal.js and App.jsx
Another life-cycle method - componentWillUnmount - was used to monitor the moment of modal window unmounting from the DOM to remove the event listener on the keydown.
In order to rendert the modal window, which exists separately from the DOM hierarch of the parent component (div with 'root' id path) the createPortal method was used. Due to the fact that event bubbling in portals works the same way - events will propagate to their ancestors (in the React tree, in which they are contained), it simplifies the developing of modal window as well as its event listeners and their removal.
PropTypes are added to all components to exclude the possibility of wrong-type error. Thus, used during the development stage they are used to make sure, that the data type we received is the one we wanted to have in the first place.
