var arrayOfQuates= [
    {
        author:"― Oscar Wilde",
        quate:"“Be yourself; everyone else is already taken.”"
    },
    {
        author:"― Marilyn Monroe",
        quate:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {
        author:"― Albert Einstein",
        quate:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        author:"― Frank Zappa",
        quate:"“So many books, so little time.”"
    },
    {
        author:"― Mahatma Gandhi",
        quate:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”"
    },
    {
        author:"― Narcotics Anonymous",
        quate:"“Insanity is doing the same thing, over and over again, but expecting different results.”"
    }
    
]
var lastNumber = null;
function changeQuate(){
    var randomNumber = Math.floor(Math.random()*arrayOfQuates.length);
    if(randomNumber===lastNumber){
        randomNumber = Math.floor(Math.random()*arrayOfQuates.length);
    }
    document.getElementById("quateOutput").innerHTML=arrayOfQuates[randomNumber].quate
    document.getElementById("authorOutput").innerHTML=arrayOfQuates[randomNumber].author
    lastNumber=randomNumber;
    return randomNumber;
}
