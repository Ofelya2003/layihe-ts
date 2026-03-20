import React from 'react';
import "../../assets/css/Home/TeamSection.css";
import { useL } from "../../useL";

const TeamSection: React.FC = () => {
    const t = useL();
    const teamMembers = [
        { id: 1, name: "Kristin Watson", role: t("Təsisçi və Baş Rejissor", "Founder & Lead Director", "Основатель и главный режиссер"), image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
        { id: 2, name: "Emma Johnson", role: t("Baş Operator (DOP)", "Director of Photography", "Главный оператор"), image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" },
        { id: 3, name: "Sophia Davis", role: t("Ssenari Müəllifi", "Scriptwriter", "Сценарист"), image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg" },
        { id: 4, name: "James Wilson", role: t("Səs Rejissoru", "Sound Director", "Звукорежиссер"), image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" }
    ];

    return (
        <section className="team-section">
            <div className="container">
                <div className="team-header text-center">
                    <h2>{t("Bizim Peşəkar Komanda", "Our Professional Team", "Наша профессиональная команда")}</h2>
                    <p>{t("Uğurumuzun arxasında duran yaradıcı heyət", "The creative team behind our success", "Творческая команда, стоящая за нашим успехом")}</p>
                </div>
                <div className="row">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="col-lg-3 col-md-6 mb-4">
                            <div className="team-card">
                                <div className="team-img-wrapper">
                                    <img src={member.image} alt={member.name} className="team-img" />
                                    <div className="team-socials">
                                        <i className="bi bi-linkedin"></i>
                                        <i className="bi bi-twitter-x"></i>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="member-name">{member.name}</h4>
                                    <span className="member-role">{member.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TeamSection;