const changeText = function() {
    const headerElement = document.querySelector('header');
  
    if (headerElement) { 
      headerElement.innerHTML = " divansharora03@gmail.com  |   +91-7814600927  | <a href=\"https://www.linkedin.com/in/divansh-arora-dk30/\">Linkedin</a>  | <a href=\"https://github.com/divanshArora3\">Github</a>";
    } else {
      console.warn("Header element not found. Text not changed.");
    }
  };
  
  const headerText = setTimeout(changeText, 2500);