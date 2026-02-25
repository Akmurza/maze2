import { useEffect } from 'react';
import { useUser } from '../context/UserContext';

export default function Journey() {
    useEffect(() => {
        document.body.classList.add('journey-theme');
        return () => {
            document.body.classList.remove('journey-theme');
        };
    }, []);

    return (
        <div className="journey-page">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <section className="page-header">
                <h1>The Blue Corridor</h1>
                <p className="subtitle">You walk, the floor walks back.</p>
            </section>

            <section className="content-section">
                <div className="container">
                    <h2>Late Diagnosis: The Museum of Masks</h2>
                    <p className="lead">
                        You learned the choreography late; the music was already tired.
                    </p>

                    <div className="info-grid">
                        <div className="info-card">
                            <h3>The Discovery</h3>
                            <p>
                                The label arrives like a receipt you never asked for.
                                It still explains the bill.
                            </p>
                        </div>

                        <div className="info-card">
                            <h3>The Grief</h3>
                            <p>
                                You grieve the performance, and the applause you never wanted to earn.
                            </p>
                        </div>

                        <div className="info-card">
                            <h3>The Relief</h3>
                            <p>
                                Relief shows up late, carrying a folding chair.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark-section">
                <div className="container">
                    <h2>Masking, the Soft Armor</h2>
                    <p className="lead">
                        A small list of tricks the body learned without consent:
                    </p>

                    <div className="masking-examples">
                        <div className="masking-item">
                            <span className="icon">
                                <img src="/Flower159_1771925799.svg" alt="Mask" />
                            </span>
                            <h4>Facial Expression Control</h4>
                            <p>Adjusting the face like borrowed furniture</p>
                        </div>

                        <div className="masking-item">
                            <span className="icon">
                                <img src="/Evil-old-snake-1_1754288143.svg" alt="Eyes" />
                            </span>
                            <h4>Forced Eye Contact</h4>
                            <p>Staring at faces when the floor is kind</p>
                        </div>

                        <div className="masking-item">
                            <span className="icon">
                                <img src="/young-girl-face_1771436666.svg" alt="Stims" />
                            </span>
                            <h4>Suppressing Stims</h4>
                            <p>Folding the hands until they lose the plot</p>
                        </div>

                        <div className="masking-item">
                            <span className="icon">
                                <img src="/Turtle_IX_1771926333.svg" alt="Scripts" />
                            </span>
                            <h4>Social Scripts</h4>
                            <p>Reciting lines that never sit still</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <h2>Burnout: The Power Cuts</h2>
                    <p className="lead">
                        The lights flicker, the stage goes empty.
                    </p>

                    <div className="burnout-warning">
                        <h3>Signs of Burnout:</h3>
                        <ul>
                            <li>Losing skills you used yesterday</li>
                            <li>Senses turning the volume knob up</li>
                            <li>Speech taking the day off</li>
                            <li>The mask slipping even when you beg it</li>
                            <li>Sleep bringing receipts, not rest</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}