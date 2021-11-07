let data = [
    {
        "author": "Albert Einstein",
        "text": "God always takes the simplest way."
      },
      {
        "author": "Albert Einstein",
        "text": "Learn from yesterday, live for today, hope for tomorrow."
      },
      {
        "author": "Albert Einstein",
        "text": "The only real valuable thing is intuition."
      },
      {
        "author": "Albert Einstein",
        "text": "Once we accept our limits, we go beyond them."
      },
      {
        "author": "Albert Einstein",
        "text": "Life is like riding a bicycle. To keep your balance you must keep moving."
      },
      {
        "author": "Albert Einstein",
        "text": "Feeling and longing are the motive forces behind all human endeavor and human creations."
      },
      {
        "author": "Albert Einstein",
        "text": "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind."
      },
      {
        "author": "Albert Einstein",
        "text": "Try not to become a man of success, but rather try to become a man of value."
      },
      {
        "author": "Albert Einstein",
        "text": "When the solution is simple, God is answering."
      },
      {
        "author": "Albert Einstein",
        "text": "A man should look for what is, and not for what he thinks should be."
      },
      {
        "author": "Albert Einstein",
        "text": "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create."
      },
      {
        "author": "Albert Einstein",
        "text": "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut."
      },
      {
        "author": "Albert Einstein",
        "text": "Reality is merely an illusion, albeit a very persistent one."
      },
      {
        "author": "Albert Einstein",
        "text": "Peace cannot be kept by force. It can only be achieved by understanding."
      },
      {
        "author": "Albert Einstein",
        "text": "We cannot solve our problems with the same thinking we used when we created them."
      },
      {
        "author": "Albert Einstein",
        "source": "https://en.wikiquote.org/wiki/Albert_Einstein",
        "tags": "intelligence, knowledge, simplicity, understanding",
        "text": "If you can't explain it simply, you don't understand it well enough."
      },
      {
        "author": "Albert Einstein",
        "source": "https://www.goodreads.com/quotes/38836",
        "tags": "imagination, creativity, inspiration",
        "text": "Imagination is everything. It is the preview of life's coming attractions."
      },
      {
        "author": "Albert Einstein",
        "source": "https://www.goodreads.com/quotes/297929",
        "tags": "imagination, creativity, intelligence",
        "text": "The true sign of intelligence is not knowledge but imagination."
      },
      {
        "author": "Albert Einstein",
        "text": "In the middle of every difficulty lies opportunity."
      },
      {
        "author": "Albert Einstein",
        "text": "Setting an example is not the main means of influencing another, it is the only means."
      },
      {
        "author": "Albert Einstein",
        "text": "Logic will get you from A to B. Imagination will take you everywhere."
      },
      {
        "author": "Albert Einstein",
        "text": "Great ideas often receive violent opposition from mediocre minds."
      },
      {
        "author": "Albert Einstein",
        "text": "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either."
      },
      {
        "author": "Albert Einstein",
        "text": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."
      },
      {
        "author": "Albert Einstein",
        "text": "One may say the eternal mystery of the world is its comprehensibility."
      },
      {
        "author": "Albert Einstein",
        "text": "A person who never made a mistake never tried anything new."
      },
      {
        "author": "Albert Einstein",
        "source": "https://www.goodreads.com/quotes/11458",
        "tags": "talent, curious, curiosity, passion",
        "text": "I have no special talent. I am only passionately curious."
      }];

///////////////////
//  Code itself  //
///////////////////

let jsonLength = Object.keys(data).length;
let index = Math.ceil(Math.random() * jsonLength);

let name = data[index]["author"];
let quote = data[index]["text"];

console.log(`Just to make sure you don't feel demotivated, why not follow the wise words of ${name}:`);
console.log(`> "${quote}"`);
