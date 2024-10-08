import { useDraggable } from '@dnd-kit/core';

const DraggableComponent = ({ id, children }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={{ marginBottom: '10px', cursor: 'move' }}>
      {children}
    </div>
  );
};

export default DraggableComponent;
