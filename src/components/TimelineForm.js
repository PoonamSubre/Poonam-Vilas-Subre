import React, { useState } from 'react';
import './TimelineForm.css'; 
import gIcon from './G.svg'; 
import uIcon from './U.png';

const TimelineForm = () => {
    const [milestones, setMilestones] = useState([{ title: '', date: '' }]);
    const addMilestone = () => {
        setMilestones([...milestones, { title: '', date: '' }]);
    };
    const handleMilestoneChange = (index, field, value) => {
        const updatedMilestones = [...milestones];
        updatedMilestones[index][field] = value;
        setMilestones(updatedMilestones);
    };
    const removeMilestone = (index) => {
        const updatedMilestones = milestones.filter((_, i) => i !== index);
        setMilestones(updatedMilestones);
    };

    return (
        <div className="timeline-page">
            <div className="timeline-form">
                <h2>Create your Love Timeline</h2>
                <div className="container">
                    <h3>Add your details</h3>
                    <div className="input-group">
                        <label>Your Name</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="input-group">
                        <label>Partner Name</label>
                        <input type="text" placeholder="Enter your partner name" />
                    </div>
                    <div className="input-group">
                        <label>Couple Name</label>
                        <input type="text" placeholder="Eg.. Virat & Anushka => Virushka" />
                    </div>
                    <div className="input-group">
                        <label>Your Image <span className="file-info">(recommended aspect ratio of image 1:1)</span></label>
                        <input type="file" id="your-image" />
                    </div>
                    <div className="input-group">
                        <label>Partner Image <span className="file-info">(recommended aspect ratio of image 1:1)</span></label>
                        <input type="file" id="partner-image" />
                    </div>
                    <div className="input-group">
                        <label>Couple Image <span className="file-info">(Optional)</span></label>
                        <input type="file" id="couple-image" />
                    </div>
                </div>
                <div className="container">
                    <h3>Add your journey milestones</h3>
                    {milestones.map((milestone, index) => (
                        <div key={index} className="milestone-row">
                            <div className="milestone-inputs">
                                <label>Milestone {index + 1}</label>
                                <input
                                    type="text"
                                    placeholder={`Milestone ${index + 1}`}
                                    value={milestone.title}
                                    onChange={(e) => handleMilestoneChange(index, 'title', e.target.value)}
                                />
                            </div>
                            <div className="milestone-inputs">
                                <label>Date of Milestone {index + 1}</label>
                                <input
                                    type="date"
                                    value={milestone.date}
                                    onChange={(e) => handleMilestoneChange(index, 'date', e.target.value)}
                                />
                            </div>
                            <button className="delete-milestone-btn" onClick={() => removeMilestone(index)}>
                                <img src="./delete.svg" alt="Delete" className="delete-icon" /> 
                            </button>
                        </div>
                    ))}
                    <button className="add-milestone-btn" onClick={addMilestone}>Add Milestone</button>
                </div>

                <button className="create-timeline-btn">Create Timeline</button>
            </div>
            <a href="https://www.greetsu.com/" className="bottom-left-icons">
                <div className="icon-text-wrapper">
                    <img src={gIcon} alt="G" className="left-icon" />
                    <img src={uIcon} alt="U" className="left-icon1" />
                    <div className="icon-text">
                        <span className="from">from team</span>
                        <span className="greets-u">GreetsU</span>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default TimelineForm;
