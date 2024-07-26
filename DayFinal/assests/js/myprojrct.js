let Dataproject = [];

function submitBlog(event) {
  event.preventDefault();

  let inputProject = document.getElementById("inputProject").value;
  let inputDate = document.getElementById("inputDate").value;
  let inputDatetime = document.getElementById("inputDatetime").value;
  let inputDescription = document.getElementById("inputDescription").value;
  let inputImage = document.getElementById("inputImage").files;
  let NodeJs = document.getElementById("NodeJs").checked;
  let ReactJs = document.getElementById("ReactJs").checked;
  let NextJs = document.getElementById("NextJs").checked;
  let TypeScript = document.getElementById("TypeScript").checked;

  if (inputProject === "") {
    alert("Tolong isikan projectnya");
    return;
  } else if (inputDate === "") {
    alert("Tolong isikan datenya");
    return;
  } else if (inputDatetime === "") {
    alert("Tolong isikan datenya");
    return;
  } else if (inputDescription === "") {
    alert("Tolong isikan Descriptionya");
    return;
  } else if (inputImage.length === 0) {
    alert("Tolong isikan gambarnya");
    return;
  }

  inputImage = URL.createObjectURL(inputImage[0]);

  const MyProject = {
    project: inputProject,
    Date: inputDate,
    Datetime: inputDatetime,
    description: inputDescription,
    nodeJs: NodeJs,
    reactJs: ReactJs,
    nextJs: NextJs,
    typeScript: TypeScript,
    image: inputImage,
  };

  Dataproject.push(MyProject);
  renderMyProject();
}

function getDistanceTime(postAt) {
  const postDate = new Date(postAt);
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate - postDate);

  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const monthsDiff = Math.ceil(daysDiff / 30);
  const yearsDiff = Math.floor(monthsDiff / 12);

  if (yearsDiff > 0) {
    return `${yearsDiff} years ago`;
  } else if (monthsDiff > 0) {
    return `${monthsDiff} months ago`;
  } else {
    return `${daysDiff} days ago`;
  }
}

function renderMyProject() {
  document.getElementById("content").innerHTML = "";
  for (let index = 0; index < Dataproject.length; index++) {
    document.getElementById("content").innerHTML += `
      <div class="container-card">
        <div class="container-image">
          <img src="${Dataproject[index].image}" alt="Image Upload" />
        </div>
        <div class="container-content">
          <h3><a href="./DetailProject.html"> ${Dataproject[index].project}</a> - ${new Date(Dataproject[index].Date).getFullYear()}</h3>
          <p class="duration">Duration: ${getDistanceTime(Dataproject[index].Date)}</p>
          <p class="container-p">${Dataproject[index].description}</p>
          
          <div class="technologies">
            ${Dataproject[index].nodeJs ? '<i class="fab fa-node-js custom-size"></i>' : ""}
            ${Dataproject[index].reactJs ? '<i class="fab fa-react custom-size"></i>' : ""}
            ${Dataproject[index].nextJs ? '<i class="fab fa-js custom-size"></i>' : ""}
            ${Dataproject[index].typeScript ?
        '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">' +
        '<path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4 V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026 c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096 c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path></svg>'
        : ""}
          </div>
          <div class="btn-group">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
          </div>
        </div>
      </div>
    `;
  }
}
