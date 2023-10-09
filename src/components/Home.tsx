import React, { useEffect, useState } from "react";
import '../styles/home.scss';
import { RepositoryItem } from "./RepositoryItem";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function Home() {

    const date = new Date();
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/DiogenesRychlewski/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    function handleAddLocalStorage() {
        localStorage.valor = "Local storage adicionado no ano de " + date.getFullYear()
    };

    function handleRemoveLocalStorage() {
        localStorage.removeItem("valor");
    };

    return (
        <div className="screen-buttons">
            <header />
            <div className="line" />
            <button onClick={handleAddLocalStorage}>Adicionar localStorage</button>
            <button onClick={handleRemoveLocalStorage}>Remover localStorage</button>
            <h1>Lista de repositórios</h1>
            <div className="rowRepo">
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository} />
            })}
            </div>
        </div>
    );
}
