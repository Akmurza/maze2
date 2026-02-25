import { useState } from 'react';
import { CheckCircle, Circle, Award } from 'lucide-react';
import { useUser } from '../context/UserContext';

const TASKS = [
    {
        id: 'task1',
        title: 'Let the hands do their weather',
        description: 'Give yourself 10 quiet minutes to move as you like, no notes, no audience.',
        points: 10,
        category: 'home',
        icon: '/NativeAmerican2.svg'
    },
    {
        id: 'task2',
        title: 'Look past, not through',
        description: 'In one talk, let your gaze rest where it wants. Keep the thread anyway.',
        points: 15,
        category: 'social',
        icon: '/nativeamericanman.svg'
    },
    {
        id: 'task3',
        title: 'Dress for the inner weather',
        description: 'Wear what calms your skin, even if the mirror argues.',
        points: 10,
        category: 'home',
        icon: '/African-Art-3.svg'
    },
    {
        id: 'task4',
        title: 'Take the mask off the table',
        description: 'Spend 15 minutes in a quiet place without rehearsing anything.',
        points: 15,
        category: 'self-care',
        icon: '/Dancer6_1767858911.svg'
    },
    {
        id: 'task5',
        title: 'Write the small incident',
        description: 'Note one masking moment today. No judgment, just the shape of it.',
        points: 20,
        category: 'reflection',
        icon: '/Dancer7_1768026236.svg'
    },
    {
        id: 'task6',
        title: 'Refuse the loud door',
        description: 'Decline one thing that would overload your senses. Keep your quiet.',
        points: 25,
        category: 'boundaries',
        icon: '/Deer44_1768551769.svg'
    }
];

export default function Tasks() {
    const { user, completeTask } = useUser();
    const [filter, setFilter] = useState('all');

    const filteredTasks = filter === 'all'
        ? TASKS
        : TASKS.filter(t => t.category === filter);

    const completedCount = TASKS.filter(t =>
        user.completedTasks.includes(t.id)
    ).length;

    return (
        <div className="tasks-page">
            <div className="smoke smoke-1"></div>
            <div className="smoke smoke-2"></div>
            <div className="smoke smoke-3"></div>
            <div className="smoke smoke-4"></div>
            <div className="tasks-header">
                <h1>Daily Unmasking Tasks</h1>
                <p>Small steps. Big pauses.</p>

                <div className="progress-stats">
                    <div className="stat-card">
                        <Award size={32} />
                        <div>
                            <h3>{user.points}</h3>
                            <p>Total Points</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <CheckCircle size={32} />
                        <div>
                            <h3>{completedCount}/{TASKS.length}</h3>
                            <p>Tasks Completed</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <span className="level-badge">Level {user.level}</span>
                        <p>Current Level</p>
                    </div>
                </div>
            </div>

            <div className="filter-buttons">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >
                    All Tasks
                </button>
                <button
                    className={filter === 'home' ? 'active' : ''}
                    onClick={() => setFilter('home')}
                >
                    Home
                </button>
                <button
                    className={filter === 'social' ? 'active' : ''}
                    onClick={() => setFilter('social')}
                >
                    Social
                </button>
                <button
                    className={filter === 'self-care' ? 'active' : ''}
                    onClick={() => setFilter('self-care')}
                >
                    Self-Care
                </button>
            </div>

            <div className="tasks-grid">
                {filteredTasks.map(task => {
                    const isCompleted = user.completedTasks.includes(task.id);

                    return (
                        <div key={task.id} className={`task-card ${isCompleted ? 'completed' : ''}`}>
                            <div className="task-icon">
                                <img src={task.icon} alt="" aria-hidden="true" />
                            </div>
                            <div className="task-header">
                                <h3>{task.title}</h3>
                                {isCompleted ? (
                                    <CheckCircle size={24} className="check-icon" />
                                ) : (
                                    <Circle size={24} className="check-icon" />
                                )}
                            </div>

                            <p className="task-description">{task.description}</p>

                            <div className="task-footer">
                                <span className="task-category">{task.category}</span>
                                <span className="task-points">+{task.points} points</span>
                            </div>

                            {!isCompleted && (
                                <button
                                    className="complete-btn"
                                    onClick={() => completeTask(task.id)}
                                >
                                    Mark Complete
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}