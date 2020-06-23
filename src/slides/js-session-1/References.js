import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        The bulk of the material for this presentation is from the book{' '}
        <a href="https://eloquentjavascript.net">Eloquent Javascript</a> by
        Marijn Haverbeke, Third Edition, 2019. See individual slides for section
        references.
      </p>
      <p>
        Additional material from{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          MDN articles on JavaScript.
        </a>
      </p>
      <h3>Thank-you</h3>
      <p>
        Please let us know if you have questions or feedback on this or future
        sessions
      </p>
      <ul>
        <li>Jeane Marty, jeanem@uw.edu</li>
        <li>Teri Shelton, tjshelt@uw.edu</li>
        <li>Tiffany Sevareid, tlb3@uw.edu</li>
        <li>Griffin Wesler, wesler@uw.edu</li>
      </ul>
      <p>
        To find out about future meetings,{' '}
        <a href="http://mailman12.u.washington.edu/mailman/listinfo/frontenddev">
          join our mailing list
        </a>{' '}
        (For UW staff/students only)
      </p>
    </div>
  );
}

export default Slide;
