import React from 'react'; // Import React
import { UglyThingsProvider } from './UglyThingsContext.jsx'; // Import the UglyThingsProvider
import UglyThingForm from './components/UglyThingForm.jsx'; // Import the UglyThingForm component
import UglyThingList from './components/UglyThingList.jsx'; // Import the UglyThingList component


const App = () => {

console.log('Rendering App component'); // Add this line

    return (
        <UglyThingsProvider> {/* Wrap the application with the UglyThingsProvider */}
            <div className="App">
                <h1>Ugly Things</h1> {/* Application title */}
                <UglyThingForm /> {/* Form for submitting new ugly things */}
                <UglyThingList /> {/* List of ugly things */}
            </div>
        </UglyThingsProvider>
    );
};

export default App;

