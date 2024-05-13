import React from "react"
import { v4 as uuidv4 } from "uuid"; // Import the UUID package

export default function Meme() {
    // state to store currnet meme
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    // state to store all memes fetched from API
    const [allMemes, setAllMemes] = React.useState([])

    // state to keep track of all created memes 
    const [memesCreated, setMemesCreated] = React.useState([]); 

    // state to keep track of the meme being edited
        const [editId, setEditId] = React.useState(null);  // 

    // useEffect hook to fetch all memes from API when component mounts
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            // Parse the response as JSON
            .then(data => setAllMemes(data.data.memes))
        // update the allMemes state with fetched memes
    }, [])
    // Empty dependency array to run the effect only once

    // Function to get a random meme image
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            // spread operator
            randomImage: url
            // update the randomImage property with new URL
        }))
        
    }
    
    // Function to handle form input changes
    function handleChange(event) {
        const { name, value } = event.target
        // Destructure the name and value from the event target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
            // use property name to update the state (topText or bottomText)
        }))
    }


// Function to handle meme submission by updating or creating a new meme
   function handleMemeSubmission(event) {
        event.preventDefault();
       if (editId) {
            // check if editId is not null
            const updatedMemes = memesCreated.map(m => {
                if (m.id === editId) {
                    // check if the meme id matches the editId
                    return { ...m, ...meme };
                    // merge current meme with the updated meme
                }
                return m;
                // return the meme as is
            });
           setMemesCreated(updatedMemes);
            // update the memesCreated state with the updated memes
            setEditId(null);  // Reset edit id, end editing mode
       } else {
            // if editId is null, create a new meme
            const newMeme = {
                ...meme,
                id: uuidv4()
                // add a unique id to the new meme
            };
           setMemesCreated(prevMemes => [...prevMemes, newMeme]);
           //    add the new meme to the list of memes created 
       }
       
    //    Reset the meme state to default values, keeping the current image
        setMeme({ topText: "", bottomText: "", randomImage: meme.randomImage });
    }

    // Function to start editing a meme
    function startEditing(id) {
        const memeToEdit = memesCreated.find(m => m.id === id);
        // find the meme with the id to edit
        setMeme(memeToEdit);
        // set found meme as the current meme
        setEditId(id);
        // set the editId to the id of the meme being edited
    }


    // Function to delete a meme
    function deleteMeme(id) {
        // filter out the meme with the id to delete
        setMemesCreated(prevMemes => prevMemes.filter(meme => meme.id !== id));
    }
// strict equality check to filter out the meme with the id to delete
    
    return (
        <main>
            {/* form section for creating or editing memes */}
            <div className="form">
                <input type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} />
                {/* handle changes to toptext */}
                
                <input type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} />
                {/* handle changes to bottomtext */}

                
                {/* button to fetch new image */}
                <button className="form--button"
                    onClick={getMemeImage}>Get a new meme image 🖼</button>
                
                {/* button to submit changes or create new meme */}
                <button className="form--button"
                    onClick={handleMemeSubmission}>{editId ? "Save Changes" : "Create Meme"}</button>
            </div>

            {/* live preview of current meme */}
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

            {/* display of created memes w/ options to edit or delete */}
            {memesCreated.map((meme) => (
                <div key={meme.id} className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                    <button onClick={() => startEditing(meme.id)}>Edit Meme</button>
                    <button onClick={() => deleteMeme(meme.id)}>Delete Meme</button>
                </div>
            ))}
        </main>
    );
}
