import React, { useEffect, useState } from 'react';

const BackgroundStars: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const starCount = 50; 


  const [stars, setStars] = useState<{ top: string, left: string }[]>([]);

  useEffect(() => {

    const randomStars = [...Array(starCount)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStars(randomStars);


    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);
  const getStarPosition = (leftPercentage: string, index: number) => {
    const left = (parseFloat(leftPercentage) + scrollPosition * 0.05) % 100;
    const newLeft = left < 0 ? 100 + left : left; 

    return {
      top: `${parseFloat(stars[index].top)}%`, 
      left: `${newLeft}%`,
    };
  };

  return (
    <div className="fixed inset-0 z-0">
      {stars.map((position, index) => {
        const newPosition = getStarPosition(position.left, index);
        return (
          <div
            key={index}
            className={`absolute w-[${index%10===0?3:index%2+1}px] h-[${index%10===0?3:index%2+1}px] bg-white rounded-full`}
            style={{
              top: newPosition.top,
              left: newPosition.left,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundStars;
