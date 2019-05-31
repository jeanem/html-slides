import React, { Component } from 'react';
class InputPurpose extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            The input field has a purpose listed in the{' '}
            <a href="https://www.w3.org/TR/WCAG21/#input-purposes">
              User Interface Components section
            </a>
            ; and
          </li>
          <li>
            And the technologies implementing the content support an identifying
            method. HTML5 does this with the autocomplete attribute.
          </li>
        </ul>
        <hr />
        <h3>A sample form</h3>
        <form method="post" action="/">
          <fieldset>
            <legend>Autocomplete = name</legend>

            <label htmlFor="wid-FullName1">Full name </label>
            <input id="wid-FullName1" type="text" autoComplete="name" />
          </fieldset>
          <fieldset>
            <legend>Autocomplete = family-name</legend>
            <label htmlFor="wid-FamilyName">Family name (or last name)</label>
            <input id="wid-FamilyName" type="text" autoComplete="family-name" />
          </fieldset>
          <input type="submit" className="w-BtnBase" value="Submit" />
        </form>
        <hr />
        <h3>Autocomplete markup</h3>
        <pre>
          <code>{`<input type="text" autocomplete="family-name" />`}</code>
        </pre>
      </div>
    );
  }
}

export default InputPurpose;
