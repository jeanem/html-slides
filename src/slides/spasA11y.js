import React from 'react';

function Slide(props) {
  return (
    <div className="w-SlideBody">
      <ul>
        <li>C. B. Averitt, et al, Deque Systems, presenter</li>
        <li>
          Also see: Marcy Sutton's{' '}
          <a
            target="_blank"
            href="https://www.deque.com/blog/accessibility-tips-in-single-page-applications/"
          >
            Accessibility Tips in Single-Page Applications
          </a>
        </li>
        <li>
          and{' '}
          <a target="_blank" href="https://reactjs.org/docs/accessibility.html">
            React's accessibility guide
          </a>{' '}
          for an example of specific framework techniques
        </li>
      </ul>
    </div>
  );
}

export default Slide;
