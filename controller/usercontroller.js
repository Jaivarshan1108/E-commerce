const user = require('../model/users');
const bcrypt = require('bcrypt');

exports.registeruser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).send("we nee all field");
        }

        const existinguser = await user.findOne({ email });
        if (existinguser) return res.status(400).json({ "message": "email exist" });

        const hashpassword = await bcrypt.hash(password, 12);

        await user.create({ name, email, password: hashpassword, role });
        res.status(200).json({ message: "user registered successfully" });
    }
    catch (err) {
        res.send("error : " + err);
    }
}

exports.loginuser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.send("required all fields");
        }

        const isuser = await user.findOne({ email });
        if (!isuser) {
            return res.status(400).send("no user is found");
        }

        if (!(await bcrypt.compare(password, isuser.password))) {
            return res.status(400).send("wrong password");
        }
        res.send("login succesfull");
    }
    catch(err){
        res.send("error :" , err)
    }

}