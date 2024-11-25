import React from 'react';
import BackgroundStars from './components/backgroundStars';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-y-auto snap-y snap-mandatory relative bg-black">
      <BackgroundStars />

      <div className="h-screen flex items-center justify-center w-full bg-gray-200 snap-start opacity-30">
        slide 1
      </div>
     
      <div className="h-screen flex items-center justify-center bg-gray-800 text-white snap-start">
        Slide 4
      </div>
    </div>
  );
};

export default App;
