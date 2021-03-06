//Function that generates the HTML code of the card for the manager given a manager object using its attributes
function createManager(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header" style="background-color: #5EB1BF;">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body" style="background-color: #D3EAEE;">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

//Function that generates the HTML code of the card for the engineer given a engineer object using its attributes
function createEngineer(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header" style="background-color: #5EB1BF;">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body" style="background-color: #D3EAEE;">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

//Function that generates the HTML code of the card for the intern given a intern object using its attributes
function createIntern(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header" style="background-color: #5EB1BF;">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body" style="background-color: #D3EAEE;">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

//Function that creates the html for every engineer, intern and the manager and joins the info in a single string, which is sent as a parameter to the join content function
function createHTML(engineers,interns,manager){
    let pageCards = []; 

    const managerCard=createManager(manager);
    pageCards.push(managerCard);

    for(var i=0;i<engineers.length;i++){
        const engineerCard = createEngineer(engineers[i]);
        pageCards.push(engineerCard);
    }

    for(var i=0;i<interns.length;i++){
        const internCard = createIntern(interns[i]);
        pageCards.push(internCard);
    }

    const pageContent = pageCards.join('');

    const finalPage = joinContent(pageContent); 
    return finalPage;

}

//Function that generates the entire html code, adding the cards html content generated in the createHTML function to the body 
function joinContent(pageContent) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <div>
              My team
          </div>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${pageContent}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

//Export the main function (createHTML) to be utilized in the index
module.exports = createHTML; 