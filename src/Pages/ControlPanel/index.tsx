import { useEffect } from 'react';

const ControlPanel = () => {
  useEffect(() => {
    localStorage.setItem('active', 'Control Panel');
  }, []);

  return (
    <div>
      <h1>Control Panel</h1>
    </div>
  );
};

export default ControlPanel;
