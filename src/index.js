document.addEventListener("DOMContentLoaded", function () {
  function displayHack(response) {
      console.log("hack generated");
      new Typewriter("#hack", {
          strings: response.data.answer,
          autoStart: true,
          delay: 1,
          cursor: ""
      });
  }

  function generateHack(event) {
      event.preventDefault();
      let instructionsInput = document.querySelector("#user-instructions");
      let apiKey = "3d62bcb4bbt00d0doafe81237a14077e";
      let prompt = `User instructions: Problem: ${instructionsInput.value}. Suggest a clever life hack solution.`;
      let context = "You are a helpful AI that generates clever life hacks for everyday problems. Keep the tone simple, practical, and human.";
      let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      console.log("Generating hack"); 
      console.log(`Prompt: ${prompt}`); 
      console.log(`Context: ${context}`); 
      
      axios.get(apiURL).then(displayHack);
  }

  let hackFormElement = document.querySelector("#hack-generator-form");
  hackFormElement.addEventListener("submit", generateHack);
});
