function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  console.log("dfsfd");
  if (Client.validateURL(formText)) {
    console.log("::: Form Submitted :::");
    fetch("http://localhost:8081/api", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: formText }),
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById(
          "text"
        ).innerHTML = `Text: ${res.sentence_list[0].text}`;
        document.getElementById(
          "agreement"
        ).innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        document.getElementById(
          "score_tag"
        ).innerHTML = `Score_Tag: ${res.score_tag}`;
      })
      .catch(() => console.log("Error!!"));
  } else {
    alert("Invalid URL!!! ,Try again");
  }
}

export { handleSubmit };
