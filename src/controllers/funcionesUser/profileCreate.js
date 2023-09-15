const fs = require("fs");
const path = require("path");

/*const Profile = require('../../data/Profile');


module.exports = {
    profileCreate : (req,res) => {
        const profile = JSON.parse(fs.readFileSync(path.join(__dirname, "../../data", "user.json"), "utf-8"));
         const data = {
            ...req.body,
            image : req.file ? req.file.filename : null
            }
        let newProfile = new Profile(data);
            profile.push(newProfile);
            fs.writeFileSync(path.join(__dirname, '../../data/user.json'),JSON.stringify(profile,null,2))
            return res.redirect('/users/profile');
    }
}*/