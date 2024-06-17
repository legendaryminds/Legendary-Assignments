Parent-Child Relationships
App component is the parent of both UglyThingForm and UglyThingList components, as they are directly nested within the App component.

UglyThingsProvider component is the ultimate parent because it wraps the App component, thereby providing context to all nested children components, including UglyThingForm and UglyThingList.
UglyThingsContext provides the context which is used by both UglyThingForm and UglyThingList to access and manipulate the list of ugly things.


Summary of Relationships
UglyThingsProvider (parent) -> App (child)
App (parent) -> UglyThingForm (child)
App (parent) -> UglyThingList (child)
UglyThingsContext (context provider) -> UglyThingForm and UglyThingList (context consumers)
This structure allows UglyThingForm and UglyThingList to share data and functions via the context provided by UglyThingsProvider























Step 1: Setting Up Context
Create UglyThingsContext.js
Explanation
We create a UglyThingsContext using createContext().
The UglyThingsProvider component fetches the initial list of ugly things from the API and provides functions to add, delete, and edit ugly things.
We use axios to make API requests.
The state and functions are provided to any child component through the UglyThingsContext.Provider.

Step 2: Building the Form Component
Create UglyThingForm.js
Explanation
We use the useContext hook to access the addUglyThing function from our context.
The form maintains its state using the useState hook.
The handleChange function updates the state with the user's input.
The handleSubmit function calls addUglyThing to submit the new ugly thing and resets the form fields.

Step 3: Displaying Ugly Things
Create UglyThingList.js
Explanation
We use the useContext hook to access uglyThings, deleteUglyThing, and editUglyThing from our context.
The startEditing function sets the current editing ID and pre-fills the form fields with the selected ugly thing's data.
The handleEditChange function updates the state with the user's input for editing.
The handleEditSubmit function calls editUglyThing to save the edited ugly thing and resets the form fields.

Step 4: Integrating Everything in App
Create App.js
Explanation
We wrap the application with the UglyThingsProvider to provide the context to all components.
We include the UglyThingForm and UglyThingList components to allow users to submit and display ugly things.

