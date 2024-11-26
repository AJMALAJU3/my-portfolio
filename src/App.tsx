import React from 'react';
import BackgroundStars from './components/backgroundStars';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-y-auto snap-y snap-mandatory relative bg-black">
      <BackgroundStars />

      <div className="h-screen flex items-center justify-center bg-neutral-950 w-full snap-start">
        slide 1
      </div>
     
      <div className="h-screen flex items-center justify-center bg-neutral-950 w-full snap-start">
        Slide 4
      </div>
    </div>
  );
};

export default App;
