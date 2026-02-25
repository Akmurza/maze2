// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Home() {
    const { user } = useUser();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-bubbles">
                    <span className="hero-bubble b1"></span>
                    <span className="hero-bubble b2"></span>
                    <span className="hero-bubble b3"></span>
                    <span className="hero-bubble b4"></span>
                    <span className="hero-bubble b5"></span>
                </div>
                <div className="hero-content">
                    <h1>Leave the Gear, Keep the Weird</h1>
                    <p className="tagline">Drift in, bump the walls, call it a map.</p>
                    <Link to="/ai-assistant" className="cta-button">
                        Talk to AI Companion 🐋
                    </Link>
                </div>
            </section>

            {/* Welcome Message */}
            <section className="intro-section">
                <div className="container">
                    <h2>Welcome to the Quiet Crash</h2>
                    <p className="intro-text">
                        You wore a thousand polite masks. They squeaked.
                        Let's hang them on a nail and see which one apologizes first.
                    </p>
                    <p className="intro-text">
                        Unmasked is a small guide for late-blooming neurodivergent souls,
                        part compass, part fog.
                    </p>

                    {user.points > 0 && (
                        <div className="welcome-stats">
                            <p>You hoard <strong>{user.points} points</strong> and completed <strong>{user.completedTasks.length} tasks</strong>.</p>
                            <Link to="/tasks" className="primary-btn">Continue Your Journey →</Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Three Pathways */}
            <section className="pathways-section">
                <div className="container">
                    <h2>Pick a Corridor</h2>
                    <div className="pathways-grid">
                        <div className="pathway-card">
                            <div className="pathway-icon">
                                <img src="/Evil_mad_scientist_1771500982.svg" alt="AI" />
                            </div>
                            <h3>AI Companion</h3>
                            <p>
                                A patient machine with soft shoes.
                                It listens, nods, and forgets your secrets politely.
                            </p>
                            <Link to="/ai-assistant" className="pathway-link">Start Chatting →</Link>
                        </div>

                        <div className="pathway-card">
                            <div className="pathway-icon">
                                <img src="/Lizard_XI_1771925910.svg" alt="Tasks" />
                            </div>
                            <h3>Daily Tasks</h3>
                            <p>
                                Tiny tasks. Big dramatic sighs.
                                Coins that clink only in your head.
                            </p>
                            <Link to="/tasks" className="pathway-link">View Tasks →</Link>
                        </div>

                        <div className="pathway-card">
                            <div className="pathway-icon">
                                <img src="/Turtle_IX_1771926333.svg" alt="Progress" />
                            </div>
                            <h3>Track Progress</h3>
                            <p>
                                Charts that pretend to be honest.
                                We still hang them on the wall.
                            </p>
                            <Link to="/progress" className="pathway-link">View Progress →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="quote-section">
                <div className="container">
                    <blockquote>
                        <p>"The deep is quiet, the surface is loud, and somewhere between them your kettle whistles."</p>
                        <cite>— Someone in the Hallway</cite>
                    </blockquote>
                </div>
            </section>
        </div>
    );
}