import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { faFlushed } from '@fortawesome/free-solid-svg-icons';
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons';
const displaySpacing = {
  margin: '.5em',
  display: 'inline-block'
};

function Slide(props) {
  return (
    <div>
      <h3>Active user interface components</h3>
      <p>Examples with buttons:</p>
      <ul className="w-BtnSet">
        <li style={displaySpacing}>
          Sad contrast:
          <button type="button" className="w-BtnBase unHappy">
            <FontAwesomeIcon title="So sad" icon={faSadTear} size="2x" />
          </button>
        </li>
        <li style={displaySpacing}>
          Not quite:
          <button type="button" className="w-BtnBase notQuite">
            <FontAwesomeIcon
              title="Contrast not quite there"
              icon={faFlushed}
              size="2x"
            />
          </button>
        </li>
        <li style={displaySpacing}>
          Meets the minimum:
          <button type="button" className="w-BtnBase happy">
            <FontAwesomeIcon
              title="Yeah! Minimal contrast met"
              icon={faLaughBeam}
              size="2x"
            />
          </button>
        </li>
        <li style={displaySpacing} />
      </ul>
      <hr />
      <h3>Graphical Objects</h3>
      <p>
        Stand-alone icons (e.g. PDF icon) and complex graphics such as info
        graphics, charts. Any graphic that requires the user understand the
        meaning of the graphic. See references below for more information and
        examples.
      </p>
    </div>
  );
}

export default Slide;
