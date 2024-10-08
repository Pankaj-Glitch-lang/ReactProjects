import { useDroppable } from '@dnd-kit/core';

const DropArea = ({ children }) => {
  const { setNodeRef, isOver } = useDroppable({ id: 'drop-area' });

  return (
    <div
      ref={setNodeRef}
      style={{
        border: isOver ? '2px solid green' : '2px solid black',
        height: '400px',
        width: '100%',
        marginTop: '20px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
};

export default DropArea;
