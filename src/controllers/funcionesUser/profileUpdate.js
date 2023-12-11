const db = require('../../database/models')

module.exports = {
    profileUpdate: (req, res) => {
        const profileId = req.params.id;
        


        const updatedProfile = {
            image: req.file ? req.file.filename : 'auricular.png',
            name: req.body.name,
            surname: req.body.surname,
            phone : req.body.phone,
            dni: req.body.dni,
            lookfor: req.body.lookfor,
            street: req.body.street,
            height: req.body.height,
            floor: req.body.floor,
            department: req.body.department,
            references: req.body.references,
            postalcode: req.body.postalcode,
            province: req.body.province,
            location: req.body.location
        };
        console.log(updatedProfile);

        const whereCondition = {
            id: profileId
        };
    
        db.User.update(updatedProfile, {
            where: whereCondition
        })
        .then(() => {
            res.redirect(`/users/profile/${profileId}`);
        })
        .catch(error => {
            console.log("Error al actualizar el perfil de usuario:", error);
        });
    }
}