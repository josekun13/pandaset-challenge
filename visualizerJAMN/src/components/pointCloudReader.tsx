import React, { useState, useEffect } from 'react';

function PointCloudLoader() {
    const [points, setPoints] = useState([]);

    useEffect(() => {
        // Fetch the JSON file from the public directory
        fetch('https://static.scale.com/uploads/pandaset-challenge/frame_01.json')
            .then((response) => response.json())
            .then((data) => setPoints(data))
            .catch((error) => console.error('Error loading JSON:', error));
    }, []);

    return (
        <div>
            <h1>Point Cloud Data Loaded</h1>
            {/* Render points here (e.g., using Three.js) */}
            <p>Loaded {points.length} points</p>
        </div>
    );
}
export default PointCloudLoader;
