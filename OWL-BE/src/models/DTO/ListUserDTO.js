class ListUserDTO {
    UserName
    FullName
    Email
    Phone
    Address
    Hierachy
    Image
    constructor(UserName, FullName, Email, Phone, Address, Hierachy, Image) {
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