const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, '../../data/user.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



module.exports = {
    profileUpdate: (req, res) => {
        const profileId = req.params.id;
        users.forEach(profile => {
            
            if (profile.id == profileId) {

                profile.image = req.file ? req.file.filename : 'auricular.png';
                profile.name = req.body.name,
                profile.surname = req.body.surname,
                profile.phone = req.body.phone,
                profile.dni = req.body.dni,
                profile.lookfor = req.body.lookfor,
                profile.street =req.body. street,
                profile.height =req.body. height,
                profile.floor =req.body. floor,
                profile.department =req.body. department,
                profile.references =req.body. references,
                profile.postalcode =req.body. postalcode,
                profile.provinces =req.body. provinces,
                profile.location =req.body. location
        
            }

        });
        fs.writeFileSync(usersFilePath, JSON.stringify(users), 'utf-8');
    
        res.redirect(`/users/profile/${profileId}`);
    },
}