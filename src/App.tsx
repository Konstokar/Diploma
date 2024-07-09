import React from 'react';
import BaseLayout from './components/layouts/BaseLayout/BaseLayout';
import { StartPage } from './pages/start-page/StartPage';

const App: React.FC = () => {
  return (
    <BaseLayout>
      <StartPage />
    </BaseLayout>
  );
};

export default App;