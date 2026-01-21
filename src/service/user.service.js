const userRepo = require("../repository/user.repository");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

function generatePassword() {
    return Math.random().toString(36).slice(-8); // simple random password
}

class UserService {
    async login(email, password) {
        const user = await userRepo.findByEmail(email);
        if (!user) throw new Error("Invalid email or password");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Invalid email or password");

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        };
    }


    async createUser(payload) {
        const exists = await userRepo.findByEmail(payload.email);
        if (exists) throw new Error("Email already exists");

        const plainPassword = generatePassword();

        const hashed = await bcrypt.hash(plainPassword, 10);

        const user = await userRepo.create({
            ...payload,
            password: hashed
        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sanchaya.space@gmail.com",
                pass: "meifozmdcsijmimf"
            }
        });

        await transporter.sendMail({
            from: `Carpool <${'sanchaya.space@gmail.com'}>`,
            to: payload.email,
            subject: "Your Carpool Login Credentials",
            text: `
Welcome to Carpool!

Email: ${payload.email}
Password: ${plainPassword}

Login here: http://localhost5174:/login
`
        });

        return user;
    }

    getUsers() {
        return userRepo.findAll();
    }

    async getUser(id) {
        const user = await userRepo.findById(id);
        if (!user) throw new Error("User not found");
        return user;
    }

    async deleteUser(id) {
        const user = await userRepo.findById(id);
        if (!user) throw new Error("User not found");

        return userRepo.deleteById(id);
    }

    async updateUser(id, data) {
        const user = await userRepo.findById(id);
        if (!user) throw new Error("User not found");

        return userRepo.update(id, data);
    }
}

module.exports = new UserService();