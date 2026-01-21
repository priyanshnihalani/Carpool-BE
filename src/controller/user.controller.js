const userService = require("../service/user.service");

exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.json({ success: true, user });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.login(email, password);
        res.json({ success: true, user });
    } catch (err) {
        res.status(401).json({ success: false, message: err.message });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json({ success: true, users });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id);
        res.json({ success: true, user });
    } catch (err) {
        res.status(404).json({ success: false, message: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        res.json({ success: true, message: "User deleted" });
    } catch (err) {
        res.status(404).json({ success: false, message: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        await userService.updateUser(req.params.id, req.body);
        res.json({ success: true, message: "User updated" });
    } catch (err) {
        res.status(404).json({ success: false, message: err.message });
    }
};
