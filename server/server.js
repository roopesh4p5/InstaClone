const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const { log } = require("console");
const port = 1113;
const server = jsonServer.create();
const datadb = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123123123";

const expiresIn = "1h";

function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}


function isLoginAuthenticated({ email, username, password }) {
    return (
        datadb.users.findIndex(
            (user) => (user.email === email || user.username === username) && user.password === password
        ) !== -1
    );
}

function isRegisterAuthenticated({ email, username }) {
    return datadb.users.findIndex((user) => user.email === email && user.username === username) !== -1;
}

server.post("/api/auth/register", (req, res) => {
    const { email, password, username, fullname } = req.body;

    if (isRegisterAuthenticated({ email, username })) {
        const status = 409; // Use a 409 status code to indicate a conflict (email or username already exists)
        const message = "Email or username already exists. Please use a different email or username.";
        res.status(status).json({ status, message });
        return;
    }
    fs.readFile("./data.json", (err, data) => {
        if (err) {
            const status = 401;
            const message = err;
            res.status(status).json({ status, message });
            return;
        }
        data = JSON.parse(data.toString());

        let last_item_id = data.users[data.users.length - 1].id;
        let newUserId = last_item_id + 1;

        data.users.push({
            id: newUserId,
            email: email,
            password: password,
            username: username,
            fullname: fullname,
        });

        // Write the updated data back to data.json
        fs.writeFile("./data.json", JSON.stringify(data), (err, result) => {
            if (err) {
                const status = 401;
                const message = err;
                res.status(status).json({ status, message });
                return;
            }
        });

        // Create an access token (you need to implement this)
        const access_token = createToken({ email, password });

        // Send the access token as a response
        res.status(200).json({ access_token });
    });
});
server.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;

    if (!isLoginAuthenticated({ email, password })) {
        const status = 401;
        const message = "Incorrect Email, Username, or Password";
        res.status(status).json({ status, message });
        return;
    }
    const access_token = createToken({ email, password });
    console.log(access_token);
    res.status(200).json({ access_token });
});


server.listen(port, () => {
    console.log("Running api json server on port " + port);
});