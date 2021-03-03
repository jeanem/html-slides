import React from 'react';

function Slide(props) {
  return (
    <div>
      <h3>Degrees of locality</h3>
      <p>
        Each local scope can also see all the local scopes that contain it, and
        all scopes can see the global scope. This approach to binding visibility
        is called <i>lexical scoping</i>.
      </p>
      <pre>
        <code>{`const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(\`\${ingredientAmount} \${unit} \${name}\`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};`}</code>
      </pre>
    </div>
  );
}

export default Slide;
