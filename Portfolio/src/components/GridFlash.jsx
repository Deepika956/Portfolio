import React, { useState, useEffect } from 'react';
import './GridFlash.css';

const GridFlash = () => {
  const rows = 10;
  const cols = 12;

  const [hovered, setHovered] = useState({ row: null, col: null, quadrant: '' });

  const colors = [
    '#00f0ff', '#ff9f1c', '#2ec4b6', '#cbf3f0', '#ff5d8f',
    '#8e05c2', '#05c793', '#f72585', '#7209b7', '#3a0ca3',
    '#4361ee', '#4cc9f0'
  ];

  const getQuadrant = (e, tile) => {
    const { left, top, width, height } = tile.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const horizontal = x < width / 2 ? 'left' : 'right';
    const vertical = y < height / 2 ? 'top' : 'bottom';

    return `${vertical}-${horizontal}`; // top-left, top-right, etc.
  };

  const handleMouseMove = (e) => {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile, index) => {
      const rect = tile.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const quadrant = getQuadrant(e, tile);
        setHovered({ row, col, quadrant });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tiles = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const key = `${row}-${col}`;
      const isHovered = hovered.row === row && hovered.col === col;
      const color = colors[(row * cols + col) % colors.length];
      const glowClass = isHovered ? `glow-${hovered.quadrant}` : '';

      tiles.push(
        <div
          key={key}
          className={`tile ${glowClass}`}
          style={{ '--glow-color': color }}
        />
      );
    }
  }

  return <div className="grid-bg">{tiles}</div>;
};

export default GridFlash;
