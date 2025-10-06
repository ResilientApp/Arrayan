import React from "react";


const founder = {
    name: "Mariana Larrañaga Tapia",
    // role: "Founder",
    // email: "mariana@example.com",
    // linkedin: "https://linkedin.com/in/mariana",
    // img: "https://ui-avatars.com/api/?name=Mariana&background=0D8ABC&color=fff",
};

const head_software_architect = [
    {
        name: "Amoolya Gali (Former Member) ",
        // role: "Head Software Architect",
        // email: "",
    },];
const currentMembers = [
    {
        name: "Juan Perez",
        role: "Developer",
        email: "juan@example.com",
        linkedin: "https://linkedin.com/in/juanperez",
        img: "https://ui-avatars.com/api/?name=Juan+Perez&background=0D8ABC&color=fff",
    },
    {
        name: "Ana Gómez",
        role: "Designer",
        email: "ana@example.com",
        linkedin: "https://linkedin.com/in/anagomez",
        img: "https://ui-avatars.com/api/?name=Ana+Gomez&background=0D8ABC&color=fff",
    },
];

const pastMembers = [
    {
        name: "Shravani Shete ",
        // role: "Past Developer",
        // email: "carlos@example.com",
        // linkedin: "https://linkedin.com/in/carlosruiz",
        // img: "https://ui-avatars.com/api/?name=Carlos+Ruiz&background=0D8ABC&color=fff",
    },
    {
        name: "Tarun Tiwari",
        // role: "Past Designer",
        // email: "",
    },
    {
        name: "Manali Modi",
        // role: "Past Developer",
        // email: "",
    },
    {
        name: "Srishti Singh",
        // role: "Past Developer",
        // email: "",
    }
];

const second_gen_members = [
    {
        name: "Vrushali Harane\n(Former member) ",
    },
    {
        name: "Kunjal Agrawal ",

    }
];

const business_team = [
    {
        name: "Isabella Campos",
        role: "Science Lead",
    },
    {
        name: "Victor Martinez-Cortes",
        role: "Design Consultant",
    }
];

const former_collaborators = [
    {
        name: "Sarah Natividad",
        role: "Co-founder 2021-2023",
    },
    {
        name: "Daniela Nishimoto",
        role: "Zero Waste Restaurant 2021",
    },
    {
        name: "Ariadna Melo",
        role: "Zero Waste Restaurant 2021",
    },
    {
        name: "Andrea Medina",
        role: "Green Business 2022-2023",
    },
    {
        name: "Erin Robinson",
        role: "Intern 2024",
    },
    {
        name: "Nicholas Mckenna",
        role: "Business Consultant 2024",
    },
    {
        name: "Sushmitha Kala",
        role: "Business Consultant 2024",
    }
];

const expert_guidance = [
    {
        name: "Dr. Mohammad Sadoghi",
        role: "Director EXPOLAB, UC Davis",
    }
];

const technical_support = [
    {
        name: "Expolab",
    }
];

const iconStyle = {
    width: "24px",
    height: "24px",
    marginRight: "8px",
    verticalAlign: "middle",
};

const MemberCard = ({ member }) => (
    <div
        style={{
            borderRadius: "20px",
            padding: "2rem",
            minWidth: "240px",
            maxWidth: "300px",
            background: "rgba(55, 70, 102, 0.35)", // semi-transparent blue
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(8px)", // frosted glass effect
            WebkitBackdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255, 255, 255, 0.18)", // crystal border
            textAlign: "center",
            cursor: "pointer",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.2s, box-shadow 0.2s"
        }}
        onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.boxShadow = "0 12px 36px rgba(31,38,135,0.45)";
        }}
        onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
        }}
    >

        <h2 style={{
            margin: "0.5rem 0",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.3rem",
            letterSpacing: "2px",
            position: "relative",
            zIndex: 2
        }}>{member.name}</h2>
        {/* <p style={{
            margin: "0.5rem 0",
            color: "#e0e7ff",
            fontWeight: "500",
            fontSize: "1rem",
            position: "relative",
            zIndex: 2
        }}>
            <strong>Role:</strong> {member.role}
        </p> */}
        {/* <div style={{ margin: "1rem 0", position: "relative", zIndex: 2 }}>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "8px",
                        verticalAlign: "middle"
                    }}
                />
            </a>
            <a href={`mailto:${member.email}`} title="Email">
                <img
                    src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/email.svg"
                    alt="Email"
                    style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "8px",
                        verticalAlign: "middle"
                    }}
                />
            </a>
        </div> */}
    </div>
);

const AnimatedCrystalBackground = () => (
    <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden"
    }}>
        {/* Main gradient */}
        <div style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(120deg, #171941 0%, #041f59ff 100%)",
            opacity: 0.95
        }} />
        {/* Glowing crystal polygons */}
        <svg width="100vw" height="100vh" style={{ position: "absolute", top: 0, left: 0 }}>
            <polygon points="120,320 220,440 60,480" fill="rgba(255,255,255,0.13)">
                <animate attributeName="points" values="120,320 220,440 60,480; 140,340 240,460 80,500; 120,320 220,440 60,480" dur="5s" repeatCount="indefinite" />
            </polygon>
            <polygon points="1050,160 1120,260 1000,280" fill="rgba(255,255,255,0.09)">
                <animate attributeName="points" values="1050,160 1120,260 1000,280; 1070,180 1140,280 1020,300; 1050,160 1120,260 1000,280" dur="10s" repeatCount="indefinite" />
            </polygon>
        </svg>
        {/* Floating glowing circles */}
        {[...Array(4)].map((_, i) => (
            <div key={i} style={{
                position: "absolute",
                top: `${10 + i * 18}%`,
                left: `${15 + i * 20}%`,
                width: `${120 + i * 30}px`,
                height: `${120 + i * 30}px`,
                background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)",
                borderRadius: "50%",
                filter: "blur(4px)",
                animation: `floatCrystal${i} 5s ease-in-out infinite alternate`
            }} />
        ))}
        <style>
            {`
        @keyframes floatCrystal0 { 0%{transform:translateY(0);} 100%{transform:translateY(40px);} }
        @keyframes floatCrystal1 { 0%{transform:translateY(0);} 100%{transform:translateY(-30px);} }
        @keyframes floatCrystal2 { 0%{transform:translateY(0);} 100%{transform:translateY(50px);} }
        @keyframes floatCrystal3 { 0%{transform:translateY(0);} 100%{transform:translateY(-40px);} }
      `}
        </style>
    </div>
);

const TeamPage = () => {
    return (
        <div style={{
            padding: "2rem",
            background: "transparent",
            minHeight: "100vh",
            position: "relative",
            zIndex: 1
        }}>
            <AnimatedCrystalBackground />
            <div style={{ position: "relative", zIndex: 2 }}>
                <br />
                <h1 style={{
                    textAlign: "center",
                    marginTop: "5rem",
                    marginBottom: "3rem",
                    color: "#ffffffff",
                    fontSize: "2.8rem",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    // textShadow: "0 2px 16px #2b6cf6"
                }}>TEAM</h1></div><br /><br />
            <div style={{ position: "relative", zIndex: 2 }}>
                <h2 style={{
                    color: "#fff",
                    marginBottom: "2rem",
                    textAlign: "center",
                    fontSize: "2rem",
                    letterSpacing: "2px",
                    // fontWeight: "bold",
                    // textShadow: "0 1px 8px #2b6cf6"
                }}>FOUNDER</h2>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                    <MemberCard member={founder} />
                </div>

                <br />
                <h2 style={{
                    color: "#fff",
                    marginBottom: "1rem",
                    textAlign: "center",
                    fontSize: "1.7rem",
                    marginTop: "8rem",
                    letterSpacing: "2px",
                    // fontWeight: "bold",
                    // textShadow: "0 1px 8px #2b6cf6"
                }}>HEAD SOFTWARE ARCHITECT</h2>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "center"
                }}>
                    {head_software_architect.map(member => <MemberCard key={member.email} member={member} />)}
                </div>

                <br /><br /><br />


                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    marginBottom: "3rem"
                }}>
                    {/* Expert Guidance */}
                    <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
                        <h2 style={{
                            color: "#fff",
                            marginBottom: "1rem",
                            textAlign: "center",
                            fontSize: "1.7rem",
                            letterSpacing: "2px",
                        }}>EXPERT GUIDANCE</h2>
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "2rem",
                            justifyContent: "center"
                        }}>
                            {expert_guidance.map(member => <MemberCard key={member.email || member.name} member={member} />)}
                        </div>
                    </div>
                    {/* Technical Support */}
                    <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
                        <h2 style={{
                            color: "#fff",
                            marginBottom: "1rem",
                            textAlign: "center",
                            fontSize: "1.7rem",
                            letterSpacing: "2px",
                        }}>TECHNICAL SUPPORT</h2>
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "2rem",
                            justifyContent: "center"
                        }}>
                            {technical_support.map(member => <MemberCard key={member.email || member.name} member={member} />)}
                        </div>
                    </div>
                </div>
                <br /><br />
                <h3 style={{
                    textAlign: "center",
                    fontSize: "1.5rem",
                    color: "#e0e7ff",
                    marginBottom: "2rem",
                    fontWeight: "500",
                    letterSpacing: "1px",
                }}>Meet the people behind Arrayán</h3>
                <h2 style={{
                    color: "#fff",
                    marginBottom: "1rem",
                    textAlign: "center",
                    fontSize: "1.7rem",
                    letterSpacing: "2px",
                    // fontWeight: "bold",
                    // textShadow: "0 1px 8px #2b6cf6"
                }}>APP DEVELOPMENT</h2><br />
                <br />
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "center",
                    marginBottom: "2rem"
                }}>
                    {second_gen_members.map(member => <MemberCard key={member.email} member={member} />)}
                </div>
                <br /><br />
                <h2 style={{
                    color: "#fff",
                    marginBottom: "1rem",
                    textAlign: "center",
                    fontSize: "1.7rem",
                    letterSpacing: "2px",
                    // fontWeight: "bold",
                    // textShadow: "0 1px 8px #2b6cf6"
                }}>PAST MEMBERS</h2><br /><br />
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "center"
                }}>
                    {pastMembers.map(member => <MemberCard key={member.email} member={member} />)}
                </div>

                <br /><br /><br />

                <h2 style={{
                    color: "#fff",
                    marginBottom: "1rem",
                    textAlign: "center",
                    fontSize: "1.7rem",
                    letterSpacing: "2px",
                    // fontWeight: "bold",
                    // textShadow: "0 1px 8px #2b6cf6"
                }}>BUSINESS</h2><br /><br />
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "center"
                }}>
                    {business_team.map(member => <MemberCard key={member.email} member={member} />)}
                </div>

                <br /><br /><br />

                <h2 style={{
                    color: "#fff",
                    marginBottom: "1rem",
                    textAlign: "center",
                    fontSize: "1.7rem",
                    letterSpacing: "2px",
                    // fontWeight: "bold",
                    // textShadow: "0 1px 8px #2b6cf6"
                }}>FORMER COLLABORATORS</h2><br /><br />
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "center"
                }}>
                    {former_collaborators.map(member => <MemberCard key={member.email} member={member} />)}
                </div>
            </div>
        </div>
    );
};

export default TeamPage;