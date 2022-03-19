const htmlTemplate = (cards) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="../normalize.css" />
    <link rel="stylesheet" href="../src/style.css" />
  </head>
  <body>
    
    <header>
      <h1>
        Team Profile
      </h1>
    </header>
    <section>
      <div class="grid">
        <div class="card">   
          ${cards}       
        </div>
      </div>
    </section>
  </body>
  </html>
`;

module.exports = htmlTemplate;
