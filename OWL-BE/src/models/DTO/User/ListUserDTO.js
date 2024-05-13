class ListUserDTO {
    Id
    UserName
    FullName
    Email
    Phone
    Address
    Hierachy
    Image
    constructor(Id,UserName, FullName, Email, Phone, Address, Hierachy, Image ) {
        this.Id = Id
        this.UserName = UserName;
        this.FullName = FullName;
        this.Email = Email;
        this.Phone = Phone;
        this.Address = Address;
        this.Hierachy = Hierachy;
        this.Image = Image;
    }
}

module.exports = ListUserDTO