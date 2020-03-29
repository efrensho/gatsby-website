import React, { useEffect, useState } from "react";
//import repos from '../data/repos';
import Repo from './repo';

export default () => {

    const [repos, setRepos] = useState([]);

    // load repos
    useEffect(() => {
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/efrensho/repos"); // solicitud para los repos
            let myRepos = await response.json()     // retorna el cuerpo de solicitud en formato json

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