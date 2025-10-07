import { useState, useEffect } from "react";
import "./Cards.scss";
import data from "../assets/json/cardsData.json";

interface CardData {
    id: number;
    title: string;
    description: string;
    image: string;
    details: string;
    location: string;
    URL: string;
}

export default function Cards() {
    const [cards, setCards] = useState<CardData[]>([]);
    const [selected, setSelected] = useState<CardData | null>(null);

    useEffect(() => {
        setCards(data);
    }, []);

    return (
        <section className="cardsSection" id="projects">
            <h2>Mes projets</h2>

            <div className="cardsGrid">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="card"
                        onClick={() => setSelected(card)}
                    >
                        <div className="card-image">
                            <img src={card.image} alt={card.title} />
                            <h3 className="card-title">{card.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selected && (
                <div className="modal" onClick={() => setSelected(null)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={() => setSelected(null)} className="close-button">
                            ×
                        </button>

                        <h3>{selected.title}</h3>

                        <img src={selected.image} alt={selected.title} />

                        <div className="modal-description">
                            <p>{selected.details}</p>
                            <a
                                href={selected.URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-button"
                            >
                                Voir sur {selected.location}
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}