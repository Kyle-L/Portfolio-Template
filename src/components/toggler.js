import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import React from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

/**
 * 
 * @returns 
 */
const Toggle = () => {
  const { isDark, toggleDark } = useStyledDarkMode();

  return (
    <button onClick={() => toggleDark()} checked={!!isDark}>
      {!isDark ? <BiMoon /> : <BiSun />}
      <style jsx>{`
        button {
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          outline: inherit;
          display: flex;
          justify-content: left;
          align-items: center;
          font-size: 1.4rem;
          padding: 4px;
          border-radius: 2px;
        }
        .light {
          color: #2d3748;
        }
        .dark {
          color: #f6e05e;
        }
      `}</style>
    </button>
  );
};

export default Toggle;
