import { useState, useEffect } from 'react';
import { Class, classes as initialClasses } from '../data/classes';

export const useClasses = () => {
  const [classes, setClasses] = useState<Class[]>(() => {
    const savedClasses = localStorage.getItem('classes');
    return savedClasses ? JSON.parse(savedClasses) : initialClasses;
  });

  useEffect(() => {
    localStorage.setItem('classes', JSON.stringify(classes));
  }, [classes]);

  const toggleWatched = (id: number) => {
    setClasses(prevClasses =>
      prevClasses.map(cls =>
        cls.id === id ? { ...cls, watched: !cls.watched } : cls
      )
    );
  };

  const setCurrentClass = (id: number) => {
    setClasses(prevClasses =>
      prevClasses.map(cls => ({
        ...cls,
        isCurrent: cls.id === id
      }))
    );
  };

  const updateCurrentTime = (
    id: number,
    currentTime: { hours: number; minutes: number; seconds: number },
    totalTime: { hours: number; minutes: number; seconds: number }
  ) => {
    setClasses(prevClasses =>
      prevClasses.map(cls =>
        cls.id === id ? { ...cls, currentTime, totalTime, isCurrent: true } : cls
      )
    );
  };

  const getCurrentClass = () => {
    return classes.find(cls => cls.isCurrent);
  };

  const formatTime = (time?: { hours: number; minutes: number; seconds: number }) => {
    if (!time) return '';
    return `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`;
  };

  return {
    classes,
    toggleWatched,
    updateCurrentTime,
    getCurrentClass,
    formatTime,
    setCurrentClass
  };
}; 