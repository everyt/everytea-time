'use client';

import { useEffect, useState } from 'react';
type WorkTextProps = {
  label: React.ReactNode;
  value: React.ReactNode;
  colon?: boolean;
  color?: boolean;
  fold?: boolean;
  blank?: boolean;
};

const replaceMarkerToColor = (str: React.ReactNode) => {
  let resultStr = String(str);

  if (resultStr.includes('#D2#')) {
    resultStr = resultStr.replace(
      /#D2#/g,
      `<span style='letter-spacing: -0.039rem; font-size: 0.95rem; line-height: 1.1rem;'>`,
    );
  }
  if (resultStr.includes('#B#')) {
    resultStr = resultStr.replace(/#B#/g, `<span style='color: rgb(140, 124, 134); font-weight: 450'>`);
  }
  if (resultStr.includes('#R#')) {
    resultStr = resultStr.replace(/#R#/g, `<span style='color: rgb(239, 68, 105)'>`);
  }
  if (resultStr.includes('#G#')) {
    resultStr = resultStr.replace(/#G#/g, `<span style='color: rgb(5, 150, 105)'>`);
  }
  if (resultStr.includes('#E#')) {
    resultStr = resultStr.replace(/#E#/g, `</span>`);
  }

  return <span dangerouslySetInnerHTML={{ __html: resultStr }} />;
};

export default function WorkText({
  label,
  value,
  colon = false,
  color = true,
  fold = false,
  blank = true,
}: WorkTextProps) {
  const [hide, setHide] = useState(false);

  const handleClickHideButton = () => {
    setHide((prev) => !prev);
  };

  useEffect(() => {
    if (fold) {
      setHide(true);
    }
  }, [fold]);

  return (
    <div>
      <span>
        <span className='text-red-400 font-semibold'>
          {blank && ' '}
          {color ? replaceMarkerToColor(label) : label}
        </span>
        {colon && !fold && (
          <>
            <span className='text-red-400 font-semibold'>:</span>
          </>
        )}
        {fold && <span onClick={handleClickHideButton}>&nbsp;↓</span>}
        {!hide && (
          <>
            <br />
            <div>
              <span className='text-redishgray-800 font-medium'>{color ? replaceMarkerToColor(value) : value}</span>
            </div>
          </>
        )}
      </span>
    </div>
  );
}
