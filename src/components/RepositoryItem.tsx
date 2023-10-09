import '../styles/repositoryItem.scss';

interface RepositoryItemProps {

    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <>
            <strong>{props.repository?.name}</strong>
            <button><a href={props.repository.html_url}>Acessar repositório</a></button>
        </>
    );
}

