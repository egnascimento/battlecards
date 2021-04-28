const express = require('express');
const router = express.Router();

var adjectives = ["Aback","Abaft","Abandoned","Abashed","Aberrant","Abhorrent","Abiding","Abject","Ablaze","Able","Abnormal","Aboard","Aboriginal","Abortive","Abounding",
                  "Abrasive","Abrupt","Absent","Absorbed","Absorbing","Abstracted","Absurd","Abundant","Abusive","Acceptable","Accessible","Accidental","Accurate","Acid",
                  "Acidic","Acoustic","Acrid","Actually","Ad","Hoc","Adamant","Adaptable","Addicted","Adhesive","Adjoining","Adorable","Adventurous","Afraid","Aggressive",
                  "Agonizing","Agreeable","Ahead","Ajar","Alcoholic","Alert","Alike","Alive","Alleged","Alluring","Aloof","Amazing","Ambiguous","Ambitious","Amuck","Amused",
                  "Amusing","Ancient","Angry","Animated","Annoyed","Annoying","Anxious","Apathetic","Aquatic","Aromatic","Arrogant","Ashamed","Aspiring","Assorted","Astonishing",
                  "Attractive","Auspicious","Automatic","Available","Average","Awake","Aware","Awesome","Awful","Axiomatic","Bad","Barbarous","Bashful","Bawdy","Beautiful",
                  "Befitting","Belligerent","Beneficial","Bent","Berserk","Best","Better","Bewildered","Big","Billowy","Bitter","Bizarre","Black",
                  "Bloody","Blue","Blushing","Boiling","Boorish","Bored","Boring","Bouncy","Boundless","Brainy","Brash","Brave","Brawny","Breakable","Breezy",
                  "Brief","Bright","Bright","Broad","Broken","Brown","Bumpy","Burly","Bustling","Busy","Cagey","Calculating","Callous","Calm","Capable","Capricious","Careful",
                  "Careless","Caring","Cautious","Ceaseless","Certain","Changeable","Charming","Cheap","Cheerful","Chemical","Chief","Childlike","Chilly","Chivalrous","Chubby",
                  "Chunky","Clammy","Classy","Clean","Clear","Clever","Cloistered","Cloudy","Closed","Clumsy","Cluttered","Coherent","Cold","Colorful","Colossal","Combative",
                  "Comfortable","Common","Complete","Complex","Concerned","Condemned","Confused","Conscious","Cooing","Cool","Cooperative","Coordinated","Courageous","Cowardly",
                  "Crabby","Craven","Crazy","Creepy","Crooked","Crowded","Cruel","Cuddly","Cultured","Cumbersome","Curious","Curly","Curved","Curvy","Cut","Cute","Cute","Cynical",
                  "Daffy","Daily","Damaged","Damaging","Damp","Dangerous","Dapper","Dark","Dashing","Dazzling","Dead","Deadpan","Deafening","Dear","Debonair","Decisive","Decorous",
                  "Deep","Deeply","Defeated","Defective","Defiant","Delicate","Delicious","Delightful","Demonic","Delirious","Dependent","Depressed","Deranged","Descriptive",
                  "Deserted","Detailed","Determined","Devilish","Didactic","Different","Difficult","Diligent","Direful","Dirty","Disagreeable","Disastrous","Discreet","Disgusted",
                  "Disgusting","Disillusioned","Dispensable","Distinct","Disturbed","Divergent","Dizzy","Domineering","Doubtful","Drab","Draconian","Dramatic","Dreary","Drunk",
                  "Dry","Dull","Dusty","Dynamic","Dysfunctional","Eager","Early","Earsplitting","Earthy","Easy","Eatable","Economic","EEucateE","Efficacious","Efficient","Eight",
                  "Elastic","ElateE","ElEerly","Electric","Elegant","Elfin","Elite","EmbarrasseE","Eminent","Empty","Enchanted","Enchanting","Encouraging","Endurable","Energetic",
                  "Enormous","Entertaining","Enthusiastic","Envious","Equable","Equal","Erect","Erratic","Ethereal","Evanescent","Evasive","Exotic","Expensive","Fabulous","Faded",
                  "Faithful","Fallacious","Fanatical","Fancy","Fantastic","Far","Fascinated","Fast","Fearless","Fertile",
                  "Festive","Filthy","Fine","Finicky","First","Flaky","Flashy","Flat","Flawless","Flimsy","Flowery",
                  "Fluffy","Fluttering","Foolish","Foregoing","Forgetful","Fortunate","Fragile","Frantic","Free","Friendly","Frightened","Funny","Furry","Futuristic","Fuzzy",
                  "Gabby","Gainful","Gamy","Gaping",
                  "Garrulous","Gaudy","Gentle","Giant","Giddy","Gifted","Gigantic","Glamorous","Gleaming","Glib","Glorious","Glossy","Godly","Good","Goofy",
                  "Gorgeous","Graceful","Grandiose","Gratis","Greasy","Greedy","Green","Groovy","Grotesque","Grouchy","Gruesome","Grumpy",
                  "Guarded","Guiltless","Gullible","Habitual","Half","Hallowed","Halting","Handsome","Handsomely","Handy","Hanging","Hapless","Happy","Hard",
                  "Harmonious","Harsh","Hateful","Heady","Healthy","Heartbreaking","Helpful","Helpless","Hesitant","Hideous",
                  "Highfalutin","Hilarious","Hissing","Historical","Holistic","Hollow","Homeless","Homely","Honorable","Horrible","Hospitable","Hot",
                  "Hulking","Humdrum","Humorous","Hungry","Hurried","Hurt","Hushed","Husky","Hypnotic","Hysterical","Icky","Icy","Idiotic","Ignorant","Ill","Illegal",
                  "Illustrious","Imaginary","Immense","Imminent","Impartial","Imperfect","Impolite","Important","Imported","Impossible","Incandescent","Incompetent",
                  "Inconclusive","Industrious","Incredible","Inexpensive","Infamous","Innate","Innocent","Inquisitive","Insidious","Instinctive","Intelligent","Interesting",
                  "Internal","Invincible","Irate","Irritating","Itchy","Jaded","Jagged","Jazzy","Jealous","Jittery","Jobless","Jolly","Joyous","Judicious","Juicy","Jumbled",
                  "Jumpy","Juvenile","Kaput","Keen","Kind","Kindhearted","Kindly","Knotty","Knowing","Knowledgeable","Known","Labored","Lackadaisical","Lacking","Lame","Lamentable",
                  "Languid","Large","Last","Late","Laughable","Lavish","Lazy","Lean","Learned","Left","Legal","Lethal","Level","Lewd","Light","Like","Likeable","Limping","Literate",
                  "Little","Lively","Lively","Living","Lonely","Long","Longing","Loose","Lopsided","Loud","Loutish","Lovely","Loving","Low","Lowly","Lucky","Ludicrous",
                  "Lumpy","Lush","Luxuriant","Lying","Lyrical","Macabre","Macho","Maddening","Madly","Magenta","Magical","Magnificent","Majestic","Makeshift","Male","Malicious",
                  "Mammoth","Maniacal","Many","Marked","Massive","Married","Marvelous","Material","Materialistic","Mature","Mean","Measly","Meaty","Medical","Meek","Mellow",
                  "Melodic","Melted","Merciful","Mere","Messy","Mighty","Military","Milky","Mindless","Miniature","Minor","Miscreant","Misty","Mixed","Moaning","Modern","Moldy",
                  "Momentous","Motionless","Mountainous","Muddled","Mundane","Murky","Mushy","Mute","Mysterious","Naive","Nappy","Narrow","Nasty","Natural","Naughty","Nauseating",
                  "Near","Neat","Nebulous","Necessary","Needless","Needy","Neighborly","Nervous","New","Next","Nice","Nifty","Nimble","Nine","Nippy","Noiseless","Noisy",
                  "Nonchalant","Nondescript","Nonstop","Normal","Nostalgic","Nosy","Noxious","Null","Numberless","Numerous","Nutritious","Nutty","Oafish","Obedient","Obeisant",
                  "Obese","Obnoxious","Obscene","Obsequious","Observant","Obsolete","Obtainable","Oceanic","Odd","Offbeat","Old","Omniscient","One","Onerous",
                  "Open","Opposite","Optimal","Orange","Ordinary","Organic","Ossified","Outgoing","Outrageous","Outstanding","Oval","Overconfident","Overjoyed","Overrated","Overt",
                  "Overwrought","Painful","Painstaking","Pale","Paltry","Panicky","Panoramic","Parallel","Parched","Parsimonious","Past","Pastoral","Pathetic","Peaceful",
                  "Penitent","Perfect","Periodic","Permissible","Perpetual","Petite","Petite","Phobic","Physical","Picayune","Pink","Piquant","Placid","Plain","Plant","Plastic",
                  "Plausible","Pleasant","Plucky","Pointless","Poised","Polite","Political","Poor","Possessive","Possible","Powerful","Precious","Premium","Present","Pretty",
                  "Previous","Pricey","Prickly","Private","Probable","Productive","Profuse","Protective","Proud","Psychedelic","Psychotic","Public","Puffy","Pumped","Puny","Purple",
                  "Purring","Pushy","Puzzled","Puzzling","Quack","Quaint","Quarrelsome","Questionable","Quick","Quickest","Quiet","Quirky","Quixotic","Quizzical","Rabid",
                  "Racial","Ragged","Rainy","Rambunctious","Rampant","Rapid","Rare","Raspy","Ratty","Ready","Real","Rebel","Receptive","Recondite","Red","Redundant","Reflective",
                  "Regular","Relieved","Remarkable","Reminiscent","Repulsive","Resolute","Resonant","Responsible","Rhetorical","Rich","Right","Righteous","Rightful","Rigid","Ripe",
                  "Ritzy","Roasted","Robust","Romantic","Roomy","Rotten","Rough","Round","Royal","Ruddy","Rude","Rural","Rustic","Ruthless","Sable","Sad","Safe","Salty","Same",
                  "Sassy","Satisfying","Savory","Scandalous","Scarce","Scared","Scary","Scattered","Scientific","Scintillating","Scrawny","Screeching","Second",
                  "Secret","Secretive","Sedate","Seemly","Selective","Selfish","Separate","Serious","Shaggy","Shaky","Shallow","Sharp","Shiny","Shivering","Shocking","Short",
                  "Shrill","Shut","Shy","Sick","Silent","Silent","Silky","Silly","Simple","Simplistic","Sincere","Six","Skillful","Skinny","Sleepy","Slim","Slimy","Slippery",
                  "Sloppy","Slow","Small","Smart","Smelly","Smiling","Smoggy","Smooth","Sneaky","Snobbish","Snotty","Soft","Soggy","Solid","Somber","Sophisticated","Sordid",
                  "Sore","Sore","Sour","Sparkling","Special","Spectacular","Spicy","Spiffy","Spiky","Spiritual","Spiteful","Splendid","Spooky","Spotless","Spotted","Spotty",
                  "Spurious","Squalid","Square","Squealing","Squeamish","Staking","Stale","Standing","Statuesque","Steadfast","Steady","Steep","Stereotyped","Sticky","Stiff",
                  "Stimulating","Stingy","Stormy","Straight","Strange","Striped","Strong","Stupendous","Stupid","Sturdy","Subdued","Subsequent","Substantial","Successful",
                  "Succinct","Sudden","Sulky","Super","Superb","Superficial","Supreme","Swanky","Sweet","Sweltering","Swift","Symptomatic","Synonymous","Taboo","Tacit","Tacky",
                  "Talented","Tall","Tame","Tan","Tangible","Tangy","Tart","Tasteful","Tasteless","Tasty","Tawdry","Tearful","Tedious","Teeny","Telling","Temporary",
                  "Ten","Tender","Tense","Tenuous","Terrible","Terrific","Tested","Testy","Thankful","Therapeutic","Thick","Thin","Thinkable","Third","Thirsty","Thoughtful",
                  "Thoughtless","Threatening","Three","Thundering","Tidy","Tight","Tightfisted"]

var animals = [ "Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee",
                "Bison","Boar","Buffalo","Butterfly","Camel","Capybara","Caribou","Cassowary","Cat","Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough",
                "Clam","Cobra","Cockroach","Cod","Cormorant","Coyote","Crab","Crane","Crocodile","Crow","Curlew","Deer","Dinosaur","Dog","Dogfish","Dolphin","Dotterel","Dove","Dragonfly",
                "Duck","Dugong","Dunlin","Eagle","Echidna","Eel","Eland","Elephant","Elk","Emu","Falcon","Ferret","Finch","Fish","Flamingo","Fly","Fox","Frog","Gaur","Gazelle","Gerbil",
                "Giraffe","Gnat","Gnu","Goat","Goldfinch","Goldfish","Goose","Gorilla","Goshawk","Grasshopper","Grouse","Guanaco","Gull","Hamster","Hare","Hawk","Hedgehog","Heron","Herring",
                "Hippopotamus","Hornet","Horse","Human","Hummingbird","Hyena","Ibex","Ibis","Jackal","Jaguar","Jay","Jellyfish","Kangaroo","Kingfisher","Koala","Kookabura","Kouprey","Kudu",
                "Lapwing","Lark","Lemur","Leopard","Lion","Llama","Lobster","Locust","Loris","Louse","Lyrebird","Magpie","Mallard","Manatee","Mandrill","Mantis","Marten","Meerkat","Mink",
                "Mole","Mongoose","Monkey","Moose","Mosquito","Mouse","Mule","Narwhal","Newt","Nightingale","Octopus","Okapi","Opossum","Oryx","Ostrich","Otter","Owl","Oyster","Panther",
                "Parrot","Partridge","Peafowl","Pelican","Penguin","Pheasant","Pig","Pigeon","Pony","Porcupine","Porpoise","Quail","Quelea","Quetzal","Rabbit","Raccoon","Rail","Ram","Rat",
                "Raven","Reindeer","Rhinoceros","Rook","Salamander","Salmon","Sandpiper","Sardine","Scorpion","Seahorse","Seal","Shark","Sheep","Shrew",
                "Skunk","Snail","Snake","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray","Stinkbug","Stork","Swallow","Swan","Tapir","Tarsier","Termite","Tiger",
                "Toad","Trout","Turkey","Turtle","Viper","Vulture","Wallaby","Walrus","Wasp","Weasel","Whale","Wildcat","Wolf","Wolverine","Wombat","Woodcock","Woodpecker","Worm","Wren",
                "Yak","Zebra"]

var cards_index = [0,1,2,3,4,5,6,7,8,9];
var id = 'Empty'

// Popularity (0-1000), Weight, Technology (0-100), Year
cards = [
            {title:'Waterloo Boy', image:'https://mysterious-fjord-93971.herokuapp.com/img/waterlooboy.jpg', param: [500,2804,10,1917], url:'https://johndeerejournal.com/2018/03/the-true-story-of-the-waterloo-boy-tractor/'},
            {title:'Sugarcand Harvester CH950', image:'https://mysterious-fjord-93971.herokuapp.com/img/ch950.png', param: [500,35545,70,2019], url:'https://www.deere.com.br/pt/colheitadeiras/colhedora-de-cana/ch950/'},
            {title:'Starfire SF6000', image:'https://mysterious-fjord-93971.herokuapp.com/img/sf6000.png', param: [750,2,80,2016], url:'https://www.deere.com/en/technology-products/precision-ag-technology/guidance/starfire-6000-receiver-with-sf3/'},
            {title:'Operations Center', image:'https://mysterious-fjord-93971.herokuapp.com/img/opscenter.png', param: [700,0,90,2014], url:'https://www.deere.com/en/technology-products/precision-ag-technology/data-management/operations-center/'},
            {title:'Cotton Picker CP-690', image:'https://mysterious-fjord-93971.herokuapp.com/img/cp690.png', param: [500,29937,60,2017], url:'https://www.deere.com/en/harvesting/cp690-cotton-picker/'},
            {title:'Tractor 9 series', image:'https://mysterious-fjord-93971.herokuapp.com/img/tractor9.png', param: [600,25546,50,2011], url:'https://www.deere.com/en/tractors/4wd-track-tractors/9370r-tractor/'},
            {title:'Tractor 7 series', image:'https://mysterious-fjord-93971.herokuapp.com/img/tractor7.png', param: [650,11203,45,2003], url:'https://www.deere.com/en/tractors/row-crop-tractors/row-crop-7-family/'},
            {title:'Sprayer 600 series', image:'https://mysterious-fjord-93971.herokuapp.com/img/sprayer.png', param: [450,16548,85,2021], url:'https://www.deere.com/en/sprayers/400-600-series/'},
            {title:'Baler', image:'https://mysterious-fjord-93971.herokuapp.com/img/bailer.png', param: [400,3257,30,2014], url:'https://www.deere.com/en/hay-forage/baling/'},
            {title:'Tractor 5 series', image:'https://mysterious-fjord-93971.herokuapp.com/img/tractor5.png', param: [500,2470,40,1983], url:'https://www.deere.com/en/tractors/utility-tractors/5-family-utility-tractors/'},
]

function rotateArray(array) 
{

    i = array.length - 1;

    while (i--) {
        array.unshift(array.pop());
    }


    return array;

}

var game = {
            id:id, 
            playerA:{ cards:cards_index.slice(0,5), last_message:''}, 
            playerB:{ cards:cards_index.slice(6,10), last_message: ''},
            play: {winner:'', loser:''}
            turn:'A'}

var games = {}

router.get('/', function (req, res, next) {
    res.status(200).send({
        version: "1",
        message: 'Welcome to Deere Battle Cards API!',
    });
});

router.get('/play', function (req, res, next) {

    console.log(req.query.player)

    console.log(cards[0])
    console.log(games[req.query.id])
    console.log(games[req.query.id].playerA)
    console.log(cards[games[req.query.id].playerA[0]])

    if(req.query.param == undefined)
    {
        console.log('Sending status')
    }
    else
    {
        if(req.query.player == games[req.query.id].turn)
        {
            console.log('Your turn!')
            if( games[req.query.id].turn == 'A' )
            {
                if(cards[games[req.query.id].playerA.cards[0]].param[req.query.param] > cards[games[req.query.id].playerB.cards[0]].param[req.query.param])
                {
                    console.log('You win!')
                    rotateArray(games[req.query.id].playerA.cards)
                    games[req.query.id].playerA.cards.push(game.playerB.cards[0])
                    games[req.query.id].playerB.cards.shift()
                    games[req.query.id].playerA.last_message = 'You win!'
                    games[req.query.id].play.winner = cards[games[req.query.id].playerA.cards[0]].title
                    games[req.query.id].play.loser = cards[games[req.query.id].playerB.cards[0]].title
                }
                else if(cards[games[req.query.id].playerA.cards[0]].param[req.query.param] < cards[games[req.query.id].playerB.cards[0]].param[req.query.param])
                {
                    console.log('You loose')
                    rotateArray(games[req.query.id].playerB.cards)
                    games[req.query.id].playerB.cards.push(game.playerA.cards[0])
                    games[req.query.id].playerA.cards.shift()
                    games[req.query.id].turn = 'B'
                    games[req.query.id].play.loser = cards[games[req.query.id].playerA.cards[0]].title
                    games[req.query.id].play.winner = cards[games[req.query.id].playerB.cards[0]].title
                    
                }
                else 
                {
                    console.log(cards[games[req.query.id].playerA.cards[0]].param[req.query.param])
                    console.log(cards[games[req.query.id].playerB.cards[0]].param[req.query.param])
                    rotateArray(games[req.query.id].playerA.cards)
                    rotateArray(games[req.query.id].playerB.cards)
                    games[req.query.id].playerA.last_message = 'Tie'
                    games[req.query.id].playerB.last_message = 'Tie'
                }
            }
            else{
                if(cards[games[req.query.id].playerB.cards[0]].param[req.query.param] > cards[games[req.query.id].playerA.cards[0]].param[req.query.param])
                {
                    console.log('You win!')
                    rotateArray(games[req.query.id].playerB.cards)
                    games[req.query.id].playerB.cards.push(game.playerA.cards[0])
                    games[req.query.id].playerA.cards.shift()
                    games[req.query.id].playerB.last_message = 'You win!'
                    games[req.query.id].playerA.last_message = 'You lose.'
                }
                else if(cards[games[req.query.id].playerB.cards[0]].param[req.query.param] < cards[games[req.query.id].playerA.cards[0]].param[req.query.param])
                {
                    console.log('You loose')
                    rotateArray(games[req.query.id].playerA.cards)
                    games[req.query.id].playerA.cards.push(game.playerB.cards[0])
                    games[req.query.id].playerB.cards.shift()
                    games[req.query.id].turn = 'A'
                    games[req.query.id].playerB.last_message = 'You lose.'
                    games[req.query.id].playerA.last_message = 'You win!'

                }
                else 
                {
                    console.log(cards[games[req.query.id].playerA.cards[0]].param[req.query.param])
                    console.log(cards[games[req.query.id].playerB.cards[0]].param[req.query.param])
                    rotateArray(games[req.query.id].playerA.cards)
                    rotateArray(games[req.query.id].playerB.cards)
                    games[req.query.id].playerA.last_message = 'Tie'
                    games[req.query.id].playerB.last_message = 'Tie'
                }
            }
        }
        else
        {
            if( games[req.query.id].turn == 'A' )
            {
                games[req.query.id].playerB.last_message = 'Not your turn'
            }
            else
            {
                games[req.query.id].playerA.last_message = 'Not your turn'
            }
            console.log('Not your turn')
        }
    }

    if(req.query.player == 'A')
    {
        res.status(200).send({
            version: "1",
            game: games[req.query.id].playerA,
            card: cards[games[req.query.id].playerA.cards[0]],
        });
    }
    else{
        res.status(200).send({
            version: "1",
            game: games[req.query.id].playerB,
            card: cards[games[req.query.id].playerB.cards[0]]
        });
    }

    if ( req.query.player=='A' && games[req.query.id].playerA.last_message == "You lose." )
    {
        games[req.query.id].playerA.last_message = "Waiting for your opponent"
    }
    if ( req.query.player=='A' && games[req.query.id].playerA.last_message == "You win!" )
    {
        games[req.query.id].playerA.last_message = "Your turn"
    }
    if ( req.query.player=='B' && games[req.query.id].playerB.last_message == "You lose." )
    {
        games[req.query.id].playerB.last_message = "Waiting for your opponent"
    }
    if ( req.query.player=='B' && games[req.query.id].playerB.last_message == "You win!" )
    {
        games[req.query.id].playerB.last_message = "Your turn"
    }
    if ( req.query.player=='A' && games[req.query.id].playerA.last_message == "Tie" )
    {
        if(games[req.query.id].turn == 'A')
        {
            games[req.query.id].playerA.last_message = "Your turn"
        }
        else 
        {
            games[req.query.id].playerA.last_message = "Waiting for your opponent"
        }
    }
    if ( req.query.player=='B' && games[req.query.id].playerB.last_message == "Tie" )
    {
        if(games[req.query.id].turn == 'B')
        {
            games[req.query.id].playerB.last_message = "Your turn"
        }
        else 
        {
            games[req.query.id].playerB.last_message = "Waiting for your opponent"
        }
    }


});

router.get('/new', function (req, res, next) {
    var adjlen = adjectives.length;
    var adjindex = Math.floor(Math.random() * adjlen) + 1

    var anilen = animals.length;
    var aniindex = Math.floor(Math.random() * anilen) + 1 
    var id = adjectives[adjindex] + animals[aniindex]
    console.log('Creating new game:' + id);

    cards_index = cards_index.sort((a,b) => 0.5 - Math.random(new Date().getMilliseconds()));


    game = {
        id:id, 
        playerA:{ cards:cards_index.slice(0,5), last_message:'Your turn!'}, 
        playerB:{ cards:cards_index.slice(5,10), last_message: 'Your opponent\'s turn'},
        turn:'A'}

    games[id] = game;

    res.status(200).send({
        version: "1",
        game: game,
    });
});


module.exports = router;