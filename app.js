const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dockerized Node.js App</title>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
      }

      body {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #1e3c72, #2a5298);
        color: white;
      }

      .container {
        text-align: center;
        background: rgba(255, 255, 255, 0.1);
        padding: 40px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        width: 90%;
        max-width: 600px;
        animation: fadeIn 1.5s ease-in-out;
      }

      h1 {
        font-size: 2.8rem;
        margin-bottom: 15px;
        color: #00ffcc;
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 20px;
        line-height: 1.6;
      }

      .badge {
        display: inline-block;
        padding: 12px 25px;
        border-radius: 50px;
        background: #00ffcc;
        color: #000;
        font-weight: bold;
        font-size: 1rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      }

      .footer {
        margin-top: 25px;
        font-size: 0.9rem;
        opacity: 0.8;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>🚀 Dockerized Node.js App</h1>

      <p>
        Your application is successfully running inside a 
        <strong>Docker Container</strong>.
      </p>

      <div class="badge">
        ✅ Container Running on Port ${port}
      </div>

      <div class="footer">
        Built with ❤️ using Node.js & Docker
      </div>
    </div>
  </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
