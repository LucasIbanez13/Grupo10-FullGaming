const {v4 : uuidv4} =require("uuid");
const {hashSync}= require("bcryptjs")

const user = function ({user, email, pass}) {
    this.id = uuidv4();
    this.user = user?.trim();
    this.email = email?.trim();
    this.pass = hashSync(pass.trim(), 10);
    this.rol = "user";
    this.image = "";
    this.name = "";
    this.surname = "";
    this.phone = "";
    this.dni = "";
    this.lookfor = "";
    this.street ="";
    this.height ="";
    this.floor = "";
    this.departament ="";
    this.references = "";
    this.postalcode = "";
    this.provinces = "";
    this.location = "";
                
}

module.exports = user