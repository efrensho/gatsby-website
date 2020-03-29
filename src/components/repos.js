import React, { useEffect, useState } from "react";
//import repos from '../data/repos';
import Repo from './repo';

export default () => {

    const [repos, setRepos] = useState([]);

    // load repos
    useEffect(() => {

        //converts again into JSON 
        const data = sessionStorage.getItem("repos");

        //when page is opened for the first time there'll be no data on SessionStorage, hence the if
        let myRepos;
        if (data) {
            myRepos = JSON.parse(data);
            //myRepos = myRepos.slice(1, 13);     //cuts the list of repos showed
            return setRepos(myRepos);
        }

        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/efrensho/repos"); // repo request
            let myRepos = await response.json()     // returns request and converts into a JSON file

            sessionStorage.setItem("repos", JSON.stringify(myRepos));  //Stores GH-API requests in sessionStorage as a string

            setRepos(myRepos);
        }

        fetchRepos();

        //be careful to pass a second argument here here or it will consume all your fetch request
    }, []);

    return (
        <div className="max-w-4xl mx-auto">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
                <p>Colaboración y contribución de código</p>
            </header>

            <ul className="repos-list">
                {
                    repos.map((repo) => {
                        return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
        </div>
    );
};