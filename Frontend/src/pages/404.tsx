import { Link } from "react-router-dom";
import "./404.scss";

export default function Error() {
    return (
        <section className="errorPage">
            <h1>404</h1>
            <h2>Oups... Cette page est introuvable</h2>
            <p>
                Il semble que la page que vous cherchez n’existe pas ou a été déplacée.
            </p>
            <Link to="/" className="backHome">
                Retour à l’accueil
            </Link>
        </section>
    );
}
