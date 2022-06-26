

    const qoutesArray = [
        "Learning without thinking is vain; thinking without learning is dangerous.",
        "Nothing in the world is as contagious as laughter and a good mood.",
        "The best things in life aren't what money buys.",
        "Everybody only hears what he understands.",
        "Be ashamed of yourself; that is the beginning of all excellence.",
        "Distrust is a sign of weakness.",
        "The less educated a person is, the quicker he'll be done with an excuse.",
        "Interesting self-talk requires a smart partner.",
        "Never allow yourself to meet anyone who is not happier after meeting you.",
        "You don't get very far in friendship if you're not willing to forgive small mistakes."

    ]

    const qoutesAuthor = [
        "Konfuzius", 
        "Charles Dickens", 
        "Albert Einstein", 
        "Johann Wolfgang von Goethe", 
        "Marie von Ebner-Eschenbach", 
        "Mahatma Gandhi", 
        "Marie von Ebner-Eschenbach", 
        "Herbert George Wells", 
        "Mutter Theresa", 
        "Jean de La Bruyèr"

    ]
    const pictures = [
    "images/kungfu.png",
    "images/dickens.png",
    "images/einstein.png",
    "images/goethe.png",
    "images/eschenbach.png",
    "images/ghandi.png",
    "images/eschenbach.png",
    "images/wells.png",
    "images/teresa.png",
    "images/bruyer.png",
            
    ]
    
    var lastRandom; // lastrandom = 5; 

    function getQoute() {
        
        var range = qoutesArray.length; // dynamische Längenermittlung
        var randomIndex = Math.floor(Math.random()*range) // Beispiel: liefert eine Zahl zwischen 0-9.999999 (0-range) und rundet sie ab

        while(randomIndex == lastRandom) {
            var randomIndex = Math.floor(Math.random()*range)
        } 
        
        lastRandom = randomIndex; // lastRandom und randomIndex haben den selben Wert
        // randomindex = 5; 
        // Beispiel lastrandom = 5; 

        var qoute = qoutesArray[randomIndex]; 
        var author = qoutesAuthor[randomIndex]; 
        var picture = pictures[randomIndex]

        document.getElementById("qoute").innerHTML = qoute; 
        document.getElementById("author").innerHTML = author; 
        document.getElementById("frame_photo").src = picture
    }

    document.getElementById("nextQoute").onclick = function() {
        getQoute(); 
    }