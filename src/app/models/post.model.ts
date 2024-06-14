export class Post {
    _id?: String;
    title: String;
    author: String;
    content: String;
    price: Number;
    phoneNumber: String;
    email: String;
    image: String;
    createdAt?: Date;

    constructor(_id: String,title: String,author: String,content: String,price: Number,phoneNumber: String,email: String,image: String, createdAt: Date) {
        this._id = _id;
        this.title = title;
        this.author = author;
        this.content = content;
        this.price = price;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.image = image;
        this.createdAt = createdAt;
    }
}
