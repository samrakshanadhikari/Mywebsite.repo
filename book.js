const books = [
    {
      id: 1,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      price: 12.99,
      image: "https://images.penguinrandomhouse.com/cover/9780143107637"
    },
    {
      id: 2,
      title: "War and Peace",
      author: "Leo Tolstoy",
      price: 19.99,
      image: "https://www.harpercollins.com/cdn/shop/files/9780060798888.jpg?v=1744773864&width=350"
    },
    {
      id: 3,
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      price: 15.99,
      image: "https://m.media-amazon.com/images/I/81IE8AwMvqL.jpg"
    },
    {
      id: 4,
      title: "Notes from Underground",
      author: "Fyodor Dostoevsky",
      price: 10.49,
      image: "https://book-assets.openroadmedia.com/9781504001595.jpg"
    },
    {
      id: 5,
      title: "A Little Life",
      author: "Hanya Yanagihara",
      price: 14.49,
      image: "https://m.media-amazon.com/images/I/71EthOFfhAL.jpg"
    },
    {
      id: 6,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 8.99,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg"
    },
    {
      id: 7,
      title: "Les Misérables",
      author: "Victor Hugo",
      price: 18.99,
      image: "https://images1.penguinrandomhouse.com/cover/9780451419439"
    },
    {
      id: 8,
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      price: 16.99,
      image: "https://images.penguinrandomhouse.com/cover/9780679783305"
    },
    {
        id: 9,
        title: "Bell jar",
        author: "Sylvia Plath",
        price: 19.99,
        image: "https://images.booksense.com/images/100/048/9789358048100.jpg"
      },
    {
      id: 9,
      title: "1984",
      author: "George Orwell",
      price: 9.99,
      image: "https://imusic.b-cdn.net/images/item/original/144/9780141036144.jpg?george-orwell-2008-1984-the-dystopian-classic-reimagined-with-cover-art-by-shepard-fairey-penguin-essentials-paperback-book&class=scaled&v=1367880017"
    },
    {
      id: 10,
      title: "Animal Farm",
      author: "George Orwell",
      price: 7.99,
      image: "https://m.media-amazon.com/images/I/71je3-DsQEL.jpg"
    },
    {
      id: 11,
      title: "The Great Gatsby",
      author:"F. Scott Fitzgerald",
      price: 10.99,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/960px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
    },
    {
      id: 12,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 11.99,
      image: "https://cloud.firebrandtech.com/api/v2/image/111/9780785839866/CoverArtHigh/XL"
    },
    {
      id: 13,
      title: "Kafka on the Shore",
      author: "Haruki Murakami",
      price: 12.49,
      image: "https://miro.medium.com/v2/resize:fit:1200/1*Yz9c45dBgelVQAjg9dVb_g.jpeg"
    },
    // Adding your new books
    {
      id: 14,
      title: "Sirish Ko Fool",
      author: "Parijat",
      price: 10.99,
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Shirish_ko_Phool.jpg" // Update with actual image URL
    },
    {
      id: 15,
      title: "Sumnima",
      author: "B.P. Koirala",
      price: 11.49,
      image: "https://media.pilgrimsonlineshop.com/uploads/product/original/9789937896030.webp" // Update with actual image URL
    },
    {
      id: 16,
      title: "Narendra Dai",
      author: "B.P. Koirala",
      price: 13.49,
      image: "https://media.pilgrimsonlineshop.com/uploads/product/original/9789937896054.webp" // Update with actual image URL
    },
    {
      id: 17,
      title: "Kite runner",
      author: "Khaled Hosseini",
      price: 13.49,
      image:"https://m.media-amazon.com/images/I/81IzbD2IiIL.jpg"
    },

    {
        id: 19,
        title: "The Metamorphosis",
        author: "Franz Kafka",
        price: 9.49,
        image: "https://m.media-amazon.com/images/I/81QOkf8RSIL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 20,
        title: "The Trial",
        author: "Franz Kafka",
        price: 10.99,
        image: "https://m.media-amazon.com/images/I/71X73uwgd1L.jpg"
      },
      {
        id: 21,
        title: "The Castle",
        author: "Franz Kafka",
        price: 11.49,
        image: "https://m.media-amazon.com/images/I/61epcqpv9eL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 22,
        title: "Letters to Milena",
        author: "Franz Kafka",
        price: 12.99,
        image: "https://m.media-amazon.com/images/I/71NxaDZFDSL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 23,
        title: "White nights",
        author: "Fyodor Dostoevsky",
        price: 12.99,
        image: "https://dover-books-us.imgix.net/covers/9780486469485.jpg?auto=format&w=300"
      },


  ];


let cart = [];


function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = "";

    books.forEach(book => {
        const div = document.createElement('div');
        div.className = 'book';
        div.innerHTML = `
            <img src="${book.image}" alt="${book.title}" />
            <h3>${book.title}</h3>
            <p><em>${book.author}</em></p>
            <p><strong>$${book.price.toFixed(2)}</strong></p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookList.appendChild(div);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    function scrollToBooks() {
      document.querySelector('.book-list')?.scrollIntoView({ behavior: 'smooth' });
    }
  
    // Optionally, add event listeners or triggers for the function
    // For example, you can attach it to a button click or some other event
    const scrollButton = document.querySelector('#scrollButton');
    if (scrollButton) {
      scrollButton.addEventListener('click', scrollToBooks);
    }
  });
  

function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    cart.push(book);
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function showCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
    modal.classList.remove('hidden');
}

function hideCart() {
    document.getElementById('cartModal').classList.add('hidden');
}

// Event Listeners
document.getElementById('viewCart').addEventListener('click', showCart);
document.getElementById('closeCart').addEventListener('click', hideCart);

// Initialize
renderBooks();




