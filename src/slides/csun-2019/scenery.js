import React from 'react';

function Slide(props) {
  return (
    <div className="w-SlideBody">
      <blockquote cite="http://phetsims.github.io/scenery/">
        A 2D scene graph for HTML5 that can be used to display interactive
        graphics using Canvas, SVG & DOM, with partial WebGL support.
      </blockquote>
      <p>
        Presented by Jesse Greenberg, Michael Kauzmann, and Emily Moore
        University of Colorado Boulder
      </p>
      <h3>PhET simulations</h3>
      <ul>
        <li>Physics Education Technology</li>
        <li>Simulations started in 2002 at University of Colorado Boulder</li>
        <li>Elementary through university level simulations</li>
        <li>
          <a href="https://phet.colorado.edu/">https://phet.colorado.edu/</a>
        </li>
      </ul>
      <h3>Examples</h3>
      <ul>
        <li>
          <a href="https://phet-dev.colorado.edu/html/jg-tests/csun-2019/shapes-example.html">
            Simple shapes
          </a>
        </li>
        <li>
          <a href="https://phet.colorado.edu/sims/html/friction/latest/friction_en.html">
            Friction
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
