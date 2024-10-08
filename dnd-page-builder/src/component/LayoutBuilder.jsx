import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableComponent from './DraggableComponent';
import DropArea from './DropArea';
import { saveLayoutToDB, loadLayoutFromDB } from '../firebaseFunctions';
import { useNavigate } from 'react-router-dom';

const LayoutBuilder = () => {
  const [components, setComponents] = useState([]);
  const [layoutName, setLayoutName] = useState('');
  const navigate = useNavigate();

  const handleDragEnd = (event) => {
    const { active } = event;
    setComponents((prev) => [...prev, active.id]);
  };

  const saveLayout = async () => {
    if (!layoutName) {
      alert('Please enter a layout name.');
      return;
    }
    try {
      await saveLayoutToDB(layoutName, components);
      alert('Layout saved successfully!');
    } catch (error) {
      console.error('Error saving layout:', error);
      alert('Failed to save layout.');
    }
  };
  
  const loadLayout = async () => {
    if (!layoutName) {
      alert('Please enter a layout name.');
      return;
    }
    try {
      const savedComponents = await loadLayoutFromDB(layoutName);
      setComponents(savedComponents);
    } catch (error) {
      console.error('Error loading layout:', error);
      alert('Failed to load layout.');
    }
  };
  

  const publishLayout = () => {
    navigate('/publish', { state: { components } });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Layout Name"
        value={layoutName}
        onChange={(e) => setLayoutName(e.target.value)}
      />
      <button onClick={saveLayout}>Save Layout</button>
      <button onClick={loadLayout}>Load Layout</button>
      <button onClick={publishLayout}>Publish</button>

      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div>
          <h3>Controls to Drag</h3>
          <DndContext onDragEnd={handleDragEnd}>
            <DraggableComponent id="label">Label</DraggableComponent>
            <DraggableComponent id="input">Input Box</DraggableComponent>
            <DraggableComponent id="checkbox">Checkbox</DraggableComponent>
            <DraggableComponent id="button">Button</DraggableComponent>
          </DndContext>
        </div>
        <DropArea>
          {components.map((component, index) => (
            <div key={index}>{component}</div>
          ))}
        </DropArea>
      </div>
    </div>
  );
};

export default LayoutBuilder;
