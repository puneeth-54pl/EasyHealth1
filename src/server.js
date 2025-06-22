const http = require("http");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "doctor_portal",
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

const secretKey = "your_secret_key";

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        res.writeHead(200);
        return res.end();
    }

    if (req.method === "POST" && req.url === "/register") {
        let body = "";
        req.on("data", chunk => { body += chunk.toString(); });
        req.on("end", () => {
            const { username, password, name } = JSON.parse(body);
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) return res.end(JSON.stringify({ error: "Hashing error" }));
                db.query("INSERT INTO users (username, password, name) VALUES (?, ?, ?)", [username, hash, name], err => {
                    if (err) return res.end(JSON.stringify({ error: "User exists" }));
                    res.end(JSON.stringify({ success: true }));
                });
            });
        });
    }

    if (req.method === "POST" && req.url === "/login") {
        let body = "";
        req.on("data", chunk => { body += chunk.toString(); });
        req.on("end", () => {
            const { username, password } = JSON.parse(body);
            db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
                if (err || results.length === 0) return res.end(JSON.stringify({ error: "User not found" }));

                bcrypt.compare(password, results[0].password, (err, isMatch) => {
                    if (!isMatch) return res.end(JSON.stringify({ error: "Wrong password" }));

                    const token = jwt.sign({ id: results[0].id }, secretKey, { expiresIn: "1h" });
                    console.log(results[0].name);
                    // ✅ If admin, return only token
                    if (username === "admin@example.com") {
                        return res.end(JSON.stringify({ token, admin: true }));
                    } 
                    // ✅ Else, return token + user_id
                    else {
                        return res.end(JSON.stringify({ token, user_id: username,user:results[0].name }));
                    }
                });
            });
        });
    }

    if (req.method === "POST" && req.url === "/book-appointment") {
        let body = "";
        req.on("data", chunk => { body += chunk.toString(); });
        req.on("end", () => {
            const { user_id, name, age, gender, appointment_date, notes } = JSON.parse(body);
    
            // Validate booking date
            const today = new Date().toISOString().split("T")[0];
            if (appointment_date < today) {
                return res.end(JSON.stringify({ message: "Invalid date! Please choose today or a future date." }));
            }
    
            // Check daily booking limit
            db.query("SELECT COUNT(*) AS count FROM bookings WHERE appointment_date = ?", [appointment_date], (err, results) => {
                if (err) return res.end(JSON.stringify({ message: "Database error. Try again later." }));
    
                if (results[0].count >= 15) {
                    return res.end(JSON.stringify({ message: "Max number of bookings reached for this date. Please choose another date." }));
                }
    
                // Insert appointment into database
                db.query(
                    "INSERT INTO bookings (user_id, name, age, gender, appointment_date, notes) VALUES (?, ?, ?, ?, ?, ?)",
                    [user_id, name, age, gender, appointment_date, notes],
                    err => {
                        if (err) return res.end(JSON.stringify({ message: "Error booking appointment. Try again." }));
                        res.end(JSON.stringify({ message: "Appointment booked successfully!" }));
                    }
                );
            });
        });
    }
    

    if (req.method === "POST" && req.url === "/get-bookings") {
        let body = "";
        req.on("data", chunk => { body += chunk.toString(); });
        req.on("end", () => {
            const { user_id } = JSON.parse(body);
    
            db.query("SELECT id, name, gender, appointment_date FROM bookings WHERE user_id = ?", [user_id], (err, results) => {
                if (err) return res.end(JSON.stringify({ message: "Database error." }));
                res.end(JSON.stringify(results));
            });
        });
    }

    if (req.method === "POST" && req.url === "/get-admin-bookings") {
        let body = "";
        req.on("data", chunk => { body += chunk.toString(); });
        req.on("end", () => {
            const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    
            db.query(
                "SELECT id, name, gender, appointment_date FROM bookings WHERE appointment_date >= ? ORDER BY appointment_date ASC",
                [today],
                (err, results) => {
                    if (err) return res.end(JSON.stringify({ message: "Database error." }));
                    res.end(JSON.stringify(results));
                }
            );
        });
    }
    
    
});

server.listen(3000, () => console.log("Server running on port 3000"));
