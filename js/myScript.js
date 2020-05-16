const quotes = [
    {
      "quote": "Be yourself; everyone else is already taken",
      "source": "-Oscar Wilde"
    },
    {
      "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      "source": "-Albert Einstein"
    },
    {
      "quote": "Be the change that you wish to see in the world.",
      "source": "-Mahatma Gandhi"
    },
    {
      "quote":"When the solution is simple, God is answering.",
      "source":"-Albert Einstein"
    },
    {
      "quote":"Weakness of attitude becomes weakness of character.",
      "source":"-Albert Einstein"
    },
    {
      "quote":"It always seems impossible until it's done.",
      "source":"-Nelson Mandela"
    },
    {
      "quote":"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
      "source":"-Nelson Mandela"
    },
    {
      "quote":"Faith is taking the first step even when you don't see the whole staircase.",
      "source":"-Martin Luther King Jr"
    },
    {
      "quote":"There is nothing that wastes the body like worry, and one who has any faith in God should be ashamed to worry about anything whatsoever.",
      "source":"-Mahatma Gandhi"
    },
    {
      "quote":"Life is not a funfair, life is a warfare.",
      "source":"-Bishop David Oyedepo"
    },
    {
      "quote":"We live in a thinker's world, thinkers rule the world; If you are not a thinker, you end up as a slave.",
      "source":"-Bishop David Oyedepo."
    },
    {
      "quote":"knowing what God has promised is information, but knowing what to do to actualise it is revelation",
      "source":"-Bishop David Oyedepo"
    },
    {
      "quote":"God can only prosper the works of your hand, not your calling.",
      "source":"-Bishop David Oyedepo"
    },
    {
      "quote":"You can inspire people with faith and motivate them with hope, but you can only impact them with love;",
      "source":"-Bishop David Oyedepo"
    },
    {
      "quote":"You are either spiritual or carnal, you cannot be neutral.",
      "source":"-Bishop David Oyedepo"
    },
    {
      "quote":"Knowledge is the key to freedom. It turns frustration into fulfillment, sweat into sweet. Nothing approximates the power of Knowledge. It is the key to dominion.",
      "source":"-Bishop David Oyedepo"
    },
  ]
  
  function randomQuote(){
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = `"${random.quote}"`;
    source.innerText = random.source;
  }
  
  setInterval(randomQuote, 3000);
