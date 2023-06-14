






const { LocalObservableDomFactory, EditableNetworkedDOM } = require("networked-dom-server");












  `${req.secure ? "wss" : "ws"}://${
    req.headers["x-forwarded-host"]
      ? `${req.headers["x-forwarded-host"]}:${req.headers["x-forwarded-port"]}`
      : req.headers.host
  }`;


const document = new EditableNetworkedDOM(
  url.pathToFileURL(filePath).toString(),
  LocalObservableDomFactory,
);


// Watch for changes in the DOM file and reload








// Handle document client connections
app.ws("/", (ws) => {






// Serve page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <script src="/client/index.js?websocketUrl=${getWebsocketUrl(req)}"></script>
      <script src="/overlay/index.js"></script>
    </html>
`);


// Serve mml-web-client
app.use(
  "/client/",
  express.static(path.resolve(__dirname, "../node_modules/mml-web-client/build/")),
);

// Serve starter project overlay UI
app.use(
  "/overlay/",
  express.static(
    path.resolve(__dirname, "../node_modules/@mml-io/mml-starter-project-overlay/dist/"),
  ),
);



app.listen(port);
