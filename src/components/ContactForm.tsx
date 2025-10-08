import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";

interface FormData {
    firstName: string;
    lastName: string;
    company?: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

        const payload = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            company: formData.company?.trim() || "—",
        };

        emailjs.send(serviceId, templateId, payload, publicKey)
            .then(() => {
                setStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((err) => {
                console.error("Erreur EmailJS :", err);
                setStatus("error");
            });
    };

    return (
        <section className="contactSection">
            <h3>Me contacter</h3>
            <form onSubmit={handleSubmit} className="contactForm">
                <div className="formRow">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Prénom *"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Nom *"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="formRow">
                    <input
                        type="text"
                        name="company"
                        placeholder="Société (facultatif)"
                        value={formData.company}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <input
                    type="text"
                    name="subject"
                    placeholder="Objet *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Votre message *"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Envoi..." : "Envoyer"}
                </button>

                {status === "success" && (
                    <p className="successMsg">Message envoyé avec succès !</p>
                )}
                {status === "error" && (
                    <p className="errorMsg">Une erreur est survenue. Réessayez plus tard.</p>
                )}
            </form>
        </section>
    );
}

