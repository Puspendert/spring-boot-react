import './App.css';
import {useEffect} from "react";
import axios from "axios";

function App() {

    useEffect(() => {
        axios.get("/audits")
            .then(({data}) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>Home Page</div>
    );
}

export default App;
