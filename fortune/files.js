
let quotes = [
    {
    quote:"Be careful who you trust. Salt and sugar look the same.",
    author: "Anonymous"
    },

    {
    quote:"Joy is what happens to us when we allow ourselves to recognize how good things really are.", 
    author: "Marianne Williamson"
    },

    {
    quote:"Every new beginning comes from some other beginning's end.",
    author:"Seneca"
    },
    
    {
    quote:"Little by little, one travels far.", 
    author:"J.R.R. Tolkien"
    },
    
    {
    quote:"What good are wings, without the courage to fly.", 
    author:"Harper Lee"
    },
    
    {
    quote:"She lives the poetry she cannot write.", 
    author:"Oscar Wilde"
    },
    
    {
    quote:"I can't go back to yesterday because I was a different person then.", 
    author:"Lewis Carroll"
    },
    
    {
    quote:"Don't let yesterday take up too much of today.", 
    author:"Will Rogers"
    },
    
    {
    quote:"I never dreamed about success. I worked for it.", 
    author:"Estee Lauder"
    },
    
    {
    quote:"If you want the rainbow, you gotta put up with the rain!", 
    author:"Dolly Parton"
    },
    
    {
    quote:"One person alone is not a full person; we exist in relation to others.", 
    author:"Margaret Atwood"
    },
    
    {
    quote:"All we have to decide is what to do with the time that is given to us.", 
    author:"J.R.R. Tolkien"
    },
    
    {
    quote:"It's only after we've lost everything that we're free to do anything.", 
    author:"Chuck Palahniuk"
    },
    
    {
    quote:"A woman is like a tea bag; you never know how strong it is until it's in hot water.", 
    author:"Eleanor Roosevelt"
    },
    
    {
    quote:"Love all, trust a few, do wrong to none.",
    author:"William Shakespeare"
    },
    
    {
    quote:"One bad chapter doesn't mean your story is over.", 
    author:"Unknown"
    },
    
    {
    quote:"You are not what you've done. You are what you keep doing.", 
    author:"Jack Butcher"
    },
    
    {
    quote:"It is never too late to be what you might have been.", 
    author:"George Elliot"
    },
    
    {
    quote:"Loving yourself isn't vanity. It's sanity.", 
    author:"Andre Gide"
    },
    
    {
    quote:"Turn your wounds into wisdom.", 
    author:"Oprah Winfrey"
    },
    
    {
    quote:"The road to success is always under construction.", 
    author:"Lily Tomlin"
    },
    
    {
    quote:"You must expect great things of yourself before you can do them.", 
    author:"Michael Jordan"
    },

    {
    quote:"Always do your best. What you plant now, you will harvest later.",
    author:"Og Mandino"
    },
    
    {
    quote:"And into the forest I go, to lose my mind and find my soul.", 
    author:"John Muir"
    },
    
    {
    quote:"The art of life is not controlling what happens to us, but using what happens to us.", 
    author:"Gloria Steinem"
    },

    {
    quote:"The most effective way to do it, is to do it.", 
    author:"Amelia Earhart"
    },
    
    {
    quote:"Not all those who wander are lost.", 
    author:"J.R.R. Tolkien"
    },
    
    {
    quote:"The worst enemy to creativity is self-doubt.", 
    author:"Sylvia Plath"
    },
    
    {
    quote:"If we wait until we're ready, we'll be waiting for the rest of our lives.", 
    author:"Lemony Snicket"
    },
    
    {
    quote:"The only limits for tomorrow are the doubts we have today.", 
    author:"Pittacus Lore"
    },
        
    {
    quote:"All endings are also beginnings. We just don't know it at the time.", 
    author:"Mitch Albom"
    },
        
    {
    quote:"Well behaved women seldom make history.", 
    author:"Laurel Thatcher Ulrich"
    },
        
    {
    quote:"You are your best thing.", 
    author:"Toni Morrison"
    },
        
    {
    quote:"There is always something left to love.", 
    author:"Gabriel Garcia Marquez"
    },

    {
    quote:"It does not do to dwell on dreams and forget to live.", 
    author:"J.K. Rowling"
    },
        
    {
    quote:"I am not afraid of storms, for I am learning how to sail my ship.",
    author:"Louisa May Alcott"
    }
];

let clickPhoto = document.querySelector('#bowl');   //targets img

clickPhoto.addEventListener('click', quoteOfTheDay);   //addEventListener evokes function after clicking on img


function quoteOfTheDay() {
let randomQuote = Math.floor(Math.random() * (quotes.length));   //chooses random index
document.getElementById('quoteDisplay').innerHTML = quotes[randomQuote].quote;   //connects index with the right sentence and puts it under the img (designated div)
document.getElementById('authorDisplay').innerHTML = quotes[randomQuote].author;
};
