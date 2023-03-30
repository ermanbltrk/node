class Post {
    constructor(title, author, content) {
      this.title = title;
      this.author = author;
      this.content = content;
    }
  }
const post1 = new Post("JavaScript Öğreniyorum", "Ahmet", "Bu bir örnek posttur.");
const post2 = new Post("JavaScript İleri Seviye", "Mehmet", "Bu da bir örnek posttur.");
const post3 = new Post("JavaScript Uygulama", "Ayşe", "Bu da bir örnek posttur.");
const posts = [post1, post2, post3];
posts.sort((a, b) => (a.title > b.title ? 1 : -1));
console.log(posts);
const post4 = new Post("JavaScript Blog Oluşturma", "Fatma", "Bu da bir örnek posttur.");
posts.push(post4);
console.log(posts);
posts.sort((a, b) => (a.title > b.title ? 1 : -1));
console.log(posts);
