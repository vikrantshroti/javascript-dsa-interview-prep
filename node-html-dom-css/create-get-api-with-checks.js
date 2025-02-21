const http = require("http");
const projects = [
  { id: 1, name: "Project 1" },
  { id: 2, name: "Project 2" },
];
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const urlParts = req.url.split("/"); // split url into parts

    // handle /projects/:id
    if (urlParts.length === 3 && urlParts[1] === "projects") {
      const idParam = urlParts[2].trim(); // get id from url

      //check if ID is empty or not provided
      if (!idParam) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "ID is required" }));
        return;
      }

      const projectId = parseInt(idParam, 10); // convert id to number

      //check if ID is a number
      if (isNaN(projectId)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "ID must be a number" }));
        return;
      }

      const project = projects.find((p) => p.id === projectId); // find project by id

      if (project) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(project));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Project not found" }));
      }
      return;
    }
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// start server with `node create-get-api-with-checks.js`
// test with `curl http://localhost:3000/projects/1`, output should be {"id":1,"name":"Project 1"}
// test with `curl http://localhost:3000/projects/abc`, output should be {"message":"ID must be a number"}
