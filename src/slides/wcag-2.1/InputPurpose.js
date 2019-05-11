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
        <p>
          TODO: add this link:
          https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
        </p>
        <h3>A sample form</h3>
        <form method="post" action="">
          <fieldset>
            <legend>Autocomplete = name</legend>

            <label htmlFor="wid-FullName1">Full name </label>
            <input
              id="wid-FullName1"
              type="text"
              name="fullname"
              autoComplete="name"
            />
          </fieldset>
          <fieldset>
            <legend>
              Autocomplete is <strong>off</strong>
            </legend>
            <label htmlFor="wid-FullName_AutoOff">Enter full name again </label>
            <input
              id="wid-FullName_AutoOff"
              type="text"
              name="fullname"
              autoComplete="off"
              onChange={this.onChange}
            />
          </fieldset>
          <fieldset>
            <legend>Another field with autocomplete = name </legend>
            <label htmlFor="wid-FullName2">Enter full name a third time</label>
            <input
              id="wid-FullName2"
              type="text"
              name="fullname"
              autoComplete="name"
              onChange={this.onChange}
            />
          </fieldset>
          <fieldset>
            <legend>Autocomplete = family-name</legend>
            <label htmlFor="wid-FamilyName">Family name (or last name)</label>
            <input
              id="wid-FamilyName"
              type="text"
              name="lname"
              autoComplete="family-name"
              onChange={this.onChange}
            />
          </fieldset>
          <input type="submit" className="w-BtnBase" value="Submit" />
        </form>
      </div>
    );
  }
}

export default InputPurpose;
