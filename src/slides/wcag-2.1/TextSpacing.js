import React from 'react';
const exampleContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '2em 0 0 0',
  maxWidth: '90%'
};
const example = { flex: '1' };
const origBox = {
  margin: '0 2em 0 0',
  padding: '1em',
  backgroundColor: '#4b2e83',
  color: '#fff',
  lineHeight: '20px',
  letterSpacing: '3px',
  wordSpacing: '2px',
  width: '200px',
  height: '150px'
};
const textSpacingApplied = {
  margin: '0 2em 0 0',
  padding: '1em',
  backgroundColor: '#4b2e83',
  color: '#fff',
  lineHeight: '1.5em',
  letterSpacing: '0.12em',
  wordSpacing: '0.16em',
  width: '200px',
  height: '150px'
};
const origBox2 = {
  margin: '0 2em 0 0',
  padding: '1em',
  backgroundColor: '#4b2e83',
  color: '#fff',
  lineHeight: '20px',
  letterSpacing: '3px',
  wordSpacing: '2px'
};
const betterBox = {
  margin: '0 2em 0 0',
  padding: '1em',
  backgroundColor: '#4b2e83',
  color: '#fff',
  lineHeight: '1.5em',
  letterSpacing: '0.12em',
  wordSpacing: '0.16em'
};
const noMargin = {
  margin: '0'
};

function Slide(props) {
  return (
    <div>
      <ul>
        <li>Line height (line spacing) to at least 1.5 times the font size;</li>
        <li>Spacing following paragraphs to at least 2 times the font size;</li>
        <li>Letter spacing (tracking) to at least 0.12 times the font size;</li>
        <li>Word spacing to at least 0.16 times the font size.</li>
      </ul>
      <hr />
      <h3>Examples</h3>
      <div style={exampleContainer}>
        <div style={example}>
          <h4>Page styles</h4>
          <div style={origBox}>
            <p style={noMargin}> A fixed height and width.</p>{' '}
            <p style={noMargin}>
              Fuga odit enim ab unde omnis laborum iure alias.
            </p>
          </div>
        </div>

        <div style={example}>
          <h4>User styles</h4>
          <div style={textSpacingApplied}>
            <p>A fixed height and width.</p>{' '}
            <p>Fuga odit enim ab unde omnis laborum iure alias.</p>
          </div>
        </div>
        <div style={example}>
          <h4>Page styles</h4>
          <div style={origBox2}>
            <p style={noMargin}>No fixed height or width.</p>{' '}
            <p style={noMargin}>
              Fuga odit enim ab unde omnis laborum iure alias.
            </p>
          </div>
        </div>
        <div style={example}>
          <h4>User styles</h4>
          <div style={betterBox}>
            <p>No fixed height or width</p>{' '}
            <p>Fuga odit enim ab unde omnis laborum iure alias.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
