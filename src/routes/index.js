const express = require('express');
const router = express.Router();

var adjectives = ["Aback","Abaft","Abandoned","Abashed","Aberrant","Abhorrent","Abiding","Abject","Ablaze","Able","Abnormal","Aboard","Aboriginal","Abortive","Abounding","Abrasive","Abrupt","Absent","Absorbed","Absorbing","Abstracted","Absurd","Abundant","Abusive","Acceptable","Accessible","Accidental","Accurate","Acid","Acidic","Acoustic","Acrid","Actually","Ad","Hoc","Adamant","Adaptable","Addicted","Adhesive","Adjoining","Adorable","Adventurous","Afraid","Aggressive","Agonizing","Agreeable","Ahead","Ajar","Alcoholic","Alert","Alike","Alive","Alleged","Alluring","Aloof","Amazing","Ambiguous","Ambitious","Amuck","Amused","Amusing","Ancient","Angry","Animated","Annoyed","Annoying","Anxious","Apathetic","Aquatic","Aromatic","Arrogant","Ashamed","Aspiring","Assorted","Astonishing","Attractive","Auspicious","Automatic","Available","Average","Awake","Aware","Awesome","Awful","Axiomatic","Bad","Barbarous","Bashful","Bawdy","Beautiful","Befitting","Belligerent","Beneficial","Bent","Berserk","Best","Better","Bewildered","Big","Billowy","Bite-sized","Bitter","Bizarre","Black","Black-and-white","Bloody","Blue","Blue-eyed","Blushing","Boiling","Boorish","Bored","Boring","Bouncy","Boundless","Brainy","Brash","Brave","Brawny","Breakable","Breezy","Brief","Bright","Bright","Broad","Broken","Brown","Bumpy","Burly","Bustling","Busy","Cagey","Calculating","Callous","Calm","Capable","Capricious","Careful","Careless","Caring","Cautious","Ceaseless","Certain","Changeable","Charming","Cheap","Cheerful","Chemical","Chief","Childlike","Chilly","Chivalrous","Chubby","Chunky","Clammy","Classy","Clean","Clear","Clever","Cloistered","Cloudy","Closed","Clumsy","Cluttered","Coherent","Cold","Colorful","Colossal","Combative","Comfortable","Common","Complete","Complex","Concerned","Condemned","Confused","Conscious","Cooing","Cool","Cooperative","Coordinated","Courageous","Cowardly","Crabby","Craven","Crazy","Creepy","Crooked","Crowded","Cruel","Cuddly","Cultured","Cumbersome","Curious","Curly","Curved","Curvy","Cut","Cute","Cute","Cynical","Daffy","Daily","Damaged","Damaging","Damp","Dangerous","Dapper","Dark","Dashing","Dazzling","Dead","Deadpan","Deafening","Dear","Debonair","Decisive","Decorous","Deep","Deeply","Defeated","Defective","Defiant","Delicate","Delicious","Delightful","Demonic","Delirious","Dependent","Depressed","Deranged","Descriptive","Deserted","Detailed","Determined","Devilish","Didactic","Different","Difficult","Diligent","Direful","Dirty","Disagreeable","Disastrous","Discreet","Disgusted","Disgusting","Disillusioned","Dispensable","Distinct","Disturbed","Divergent","Dizzy","Domineering","Doubtful","Drab","Draconian","Dramatic","Dreary","Drunk","Dry","Dull","Dusty","Dynamic","Dysfunctional","Dager","Darly","Darsplitting","Darthy","Dasy","Datable","Dconomic","Dducated","Dfficacious","Dfficient","Dight","Dlastic","Dlated","Dlderly","Dlectric","Dlegant","Dlfin","Dlite","Dmbarrassed","Dminent","Dmpty","Dnchanted","Dnchanting","Dncouraging","Dndurable","Dnergetic","Dnormous","Dntertaining","Dnthusiastic","Dnvious","Dquable","Dqual","Drect","Drratic","Dthereal","Dvanescent","Dvasive","Dven excellent excited","Dxciting exclusive","Dxotic","Dxpensive","Dxtra-large extra-small exuberant","Dxultant","Fabulous","Faded","Faint fair","Faithful","Fallacious","False familiar famous","Fanatical","Fancy","Fantastic","Far"," far-flung"," fascinated","Fast","Fat faulty","Fearful fearless","Feeble feigned","Female fertile","Festive","Few fierce","Filthy","Fine","Finicky","First"," five"," fixed"," flagrant","Flaky","Flashy","Flat","Flawless","Flimsy"," flippant","Flowery","Fluffy","Fluttering"," foamy","Foolish","Foregoing","Forgetful","Fortunate","Four frail","Fragile","Frantic","Free"," freezing"," frequent"," fresh"," fretful","Friendly","Frightened frightening full fumbling functional","Funny","Furry furtive","Future futuristic","Fuzzy ","Gabby","Gainful","Gamy","Gaping","Garrulous","Gaudy","General gentle","Giant","Giddy","Gifted","Gigantic","Glamorous","Gleaming","Glib","Glistening glorious","Glossy","Godly","Good","Goofy","Gorgeous","Graceful","Grandiose","Grateful gratis","Gray greasy great","Greedy","Green grey grieving","Groovy","Grotesque","Grouchy","Grubby gruesome","Grumpy","Guarded","Guiltless","Gullible gusty","Guttural H habitual","Half","Hallowed","Halting","Handsome","Handsomely","Handy","Hanging","Hapless","Happy","Hard","Hard-to-find","Harmonious","Harsh","Hateful","Heady","Healthy","Heartbreaking","Heavenly heavy hellish","Helpful","Helpless","Hesitant","Hideous high","Highfalutin","High-pitched","Hilarious","Hissing","Historical","Holistic","Hollow","Homeless","Homely","Honorable","Horrible","Hospitable","Hot huge","Hulking","Humdrum","Humorous","Hungry","Hurried","Hurt","Hushed","Husky","Hypnotic","Hysterical","Icky","Icy","Idiotic","Ignorant","Ill","Illegal","Ill-fated","Ill-informed","Illustrious","Imaginary","Immense","Imminent","Impartial","Imperfect","Impolite","Important","Imported","Impossible","Incandescent","Incompetent","Inconclusive","Industrious","Incredible","Inexpensive","Infamous","Innate","Innocent","Inquisitive","Insidious","Instinctive","Intelligent","Interesting","Internal","Invincible","Irate","Irritating","Itchy","Jaded","Jagged","Jazzy","Jealous","Jittery","Jobless","Jolly","Joyous","Judicious","Juicy","Jumbled","Jumpy","Juvenile","Kaput","Keen","Kind","Kindhearted","Kindly","Knotty","Knowing","Knowledgeable","Known","Labored","Lackadaisical","Lacking","Lame","Lamentable","Languid","Large","Last","Late","Laughable","Lavish","Lazy","Lean","Learned","Left","Legal","Lethal","Level","Lewd","Light","Like","Likeable","Limping","Literate","Little","Lively","Lively","Living","Lonely","Long","Longing","Long-term","Loose","Lopsided","Loud","Loutish","Lovely","Loving","Low","Lowly","Lucky","Ludicrous","Lumpy","Lush","Luxuriant","Lying","Lyrical","Macabre","Macho","Maddening","Madly","Magenta","Magical","Magnificent","Majestic","Makeshift","Male","Malicious","Mammoth","Maniacal","Many","Marked","Massive","Married","Marvelous","Material","Materialistic","Mature","Mean","Measly","Meaty","Medical","Meek","Mellow","Melodic","Melted","Merciful","Mere","Messy","Mighty","Military","Milky","Mindless","Miniature","Minor","Miscreant","Misty","Mixed","Moaning","Modern","Moldy","Momentous","Motionless","Mountainous","Muddled","Mundane","Murky","Mushy","Mute","Mysterious","Naive","Nappy","Narrow","Nasty","Natural","Naughty","Nauseating","Near","Neat","Nebulous","Necessary","Needless","Needy","Neighborly","Nervous","New","Next","Nice","Nifty","Nimble","Nine","Nippy","Noiseless","Noisy","Nonchalant","Nondescript","Nonstop","Normal","Nostalgic","Nosy","Noxious","Null","Numberless","Numerous","Nutritious","Nutty","Oafish","Obedient","Obeisant","Obese","Obnoxious","Obscene","Obsequious","Observant","Obsolete","Obtainable","Oceanic","Odd","Offbeat","Old","Old-fashioned","Omniscient","One","Onerous","Open","Opposite","Optimal","Orange","Ordinary","Organic","Ossified","Outgoing","Outrageous","Outstanding","Oval","Overconfident","Overjoyed","Overrated","Overt","Overwrought","Painful","Painstaking","Pale","Paltry","Panicky","Panoramic","Parallel","Parched","Parsimonious","Past","Pastoral","Pathetic","Peaceful","Penitent","Perfect","Periodic","Permissible","Perpetual","Petite","Petite","Phobic","Physical","Picayune","Pink","Piquant","Placid","Plain","Plant","Plastic","Plausible","Pleasant","Plucky","Pointless","Poised","Polite","Political","Poor","Possessive","Possible","Powerful","Precious","Premium","Present","Pretty","Previous","Pricey","Prickly","Private","Probable","Productive","Profuse","Protective","Proud","Psychedelic","Psychotic","Public","Puffy","Pumped","Puny","Purple","Purring","Pushy","Puzzled","Puzzling","Quack","Quaint","Quarrelsome","Questionable","Quick","Quickest","Quiet","Quirky","Quixotic","Quizzical","Rabid","Racial","Ragged","Rainy","Rambunctious","Rampant","Rapid","Rare","Raspy","Ratty","Ready","Real","Rebel","Receptive","Recondite","Red","Redundant","Reflective","Regular","Relieved","Remarkable","Reminiscent","Repulsive","Resolute","Resonant","Responsible","Rhetorical","Rich","Right","Righteous","Rightful","Rigid","Ripe","Ritzy","Roasted","Robust","Romantic","Roomy","Rotten","Rough","Round","Royal","Ruddy","Rude","Rural","Rustic","Ruthless","Sable","Sad","Safe","Salty","Same","Sassy","Satisfying","Savory","Scandalous","Scarce","Scared","Scary","Scattered","Scientific","Scintillating","Scrawny","Screeching","Second","Second-hand","Secret","Secretive","Sedate","Seemly","Selective","Selfish","Separate","Serious","Shaggy","Shaky","Shallow","Sharp","Shiny","Shivering","Shocking","Short","Shrill","Shut","Shy","Sick","Silent","Silent","Silky","Silly","Simple","Simplistic","Sincere","Six","Skillful","Skinny","Sleepy","Slim","Slimy","Slippery","Sloppy","Slow","Small","Smart","Smelly","Smiling","Smoggy","Smooth","Sneaky","Snobbish","Snotty","Soft","Soggy","Solid","Somber","Sophisticated","Sordid","Sore","Sore","Sour","Sparkling","Special","Spectacular","Spicy","Spiffy","Spiky","Spiritual","Spiteful","Splendid","Spooky","Spotless","Spotted","Spotty","Spurious","Squalid","Square","Squealing","Squeamish","Staking","Stale","Standing","Statuesque","Steadfast","Steady","Steep","Stereotyped","Sticky","Stiff","Stimulating","Stingy","Stormy","Straight","Strange","Striped","Strong","Stupendous","Stupid","Sturdy","Subdued","Subsequent","Substantial","Successful","Succinct","Sudden","Sulky","Super","Superb","Superficial","Supreme","Swanky","Sweet","Sweltering","Swift","Symptomatic","Synonymous","Taboo","Tacit","Tacky","Talented","Tall","Tame","Tan","Tangible","Tangy","Tart","Tasteful","Tasteless","Tasty","Tawdry","Tearful","Tedious","Teeny","Teeny-tiny","Telling","Temporary","Ten","Tender tense","Tense","Tenuous","Terrible","Terrific","Tested","Testy","Thankful","Therapeutic","Thick","Thin","Thinkable","Third","Thirsty","Thoughtful","Thoughtless","Threatening","Three","Thundering","Tidy","Tight","Tightfisted"]
var animals = [ "Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison","Boar","Buffalo","Butterfly","Camel","Capybara","Caribou","Cassowary","Cat","Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Clam","Cobra","Cockroach","Cod","Cormorant","Coyote","Crab","Crane","Crocodile","Crow","Curlew","Deer","Dinosaur","Dog","Dogfish","Dolphin","Dotterel","Dove","Dragonfly","Duck","Dugong","Dunlin","Eagle","Echidna","Eel","Eland","Elephant","Elk","Emu","Falcon","Ferret","Finch","Fish","Flamingo","Fly","Fox","Frog","Gaur","Gazelle","Gerbil","Giraffe","Gnat","Gnu","Goat","Goldfinch","Goldfish","Goose","Gorilla","Goshawk","Grasshopper","Grouse","Guanaco","Gull","Hamster","Hare","Hawk","Hedgehog","Heron","Herring","Hippopotamus","Hornet","Horse","Human","Hummingbird","Hyena","Ibex","Ibis","Jackal","Jaguar","Jay","Jellyfish","Kangaroo","Kingfisher","Koala","Kookabura","Kouprey","Kudu","Lapwing","Lark","Lemur","Leopard","Lion","Llama","Lobster","Locust","Loris","Louse","Lyrebird","Magpie","Mallard","Manatee","Mandrill","Mantis","Marten","Meerkat","Mink","Mole","Mongoose","Monkey","Moose","Mosquito","Mouse","Mule","Narwhal","Newt","Nightingale","Octopus","Okapi","Opossum","Oryx","Ostrich","Otter","Owl","Oyster","Panther","Parrot","Partridge","Peafowl","Pelican","Penguin","Pheasant","Pig","Pigeon","Pony","Porcupine","Porpoise","Quail","Quelea","Quetzal","Rabbit","Raccoon","Rail","Ram","Rat","Raven","Red deer","Red panda","Reindeer","Rhinoceros","Rook","Salamander","Salmon","Sand Dollar","Sandpiper","Sardine","Scorpion","Seahorse","Seal","Shark","Sheep","Shrew","Skunk","Snail","Snake","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray","Stinkbug","Stork","Swallow","Swan","Tapir","Tarsier","Termite","Tiger","Toad","Trout","Turkey","Turtle","Viper","Vulture","Wallaby","Walrus","Wasp","Weasel","Whale","Wildcat","Wolf","Wolverine","Wombat","Woodcock","Woodpecker","Worm","Wren","Yak","Zebra"]
var cards_index = [0,1,2,3,4,5,6,7,8,9];
var id = 'Empty'

cards = [
            {title:'Waterloo Boy', image:'https://mysterious-fjord-93971.herokuapp.com/img/waterlooboy.jpg', param: [200,10,10,1937]},
            {title:'Sugarcand Harvester CH950', image:'https://mysterious-fjord-93971.herokuapp.com/img/ch950.png', param: [200,10,10,2017]},
            {title:'Starfire SF6000', image:'https://mysterious-fjord-93971.herokuapp.com/img/sf6000.png', param: [200,10,10,2015]},
            {title:'Operations Center', image:'https://mysterious-fjord-93971.herokuapp.com/img/opscenter.png', param: [200,10,10,2016]},
            {title:'Harvester Analytics', image:'https://mysterious-fjord-93971.herokuapp.com/img/cp690.png', param: [200,10,10,2010]},
            {title:'Tractor 9 series', image:'https://mysterious-fjord-93971.herokuapp.com/img/tractor9.png', param: [200,10,10,2008]},
            {title:'Tractor 7 series', image:'https://mysterious-fjord-93971.herokuapp.com/img/tractor7.png', param: [200,10,10,2007]},
            {title:'Sprayer', image:'https://mysterious-fjord-93971.herokuapp.com/img/sprayer.png', param: [200,10,10,1950]},
            {title:'Bailer', image:'https://mysterious-fjord-93971.herokuapp.com/img/bailer.png', param: [200,10,10,1980]},
            {title:'Tractor 5 series', image:'https://mysterious-fjord-93971.herokuapp.com/img/tractor5.png', param: [200,10,10,2005]},
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
            turn:'A'}

var games = {}

router.get('/', function (req, res, next) {

    console.log(game.playerA)
    console.log(game.playerB)
    game.playerA.push(game.playerB[0])
    game.playerB.shift()
    console.log(game.playerA)
    console.log(game.playerB)

    res.status(200).send({
        version: "1",
        game: game,
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
                    games[req.query.id].playerA.last_message = 'You won!'
                    games[req.query.id].playerB.last_message = 'You lost... :('
                }
                else if(cards[games[req.query.id].playerA.cards[0]].param[req.query.param] < cards[games[req.query.id].playerB.cards[0]].param[req.query.param])
                {
                    console.log('You loose')
                    rotateArray(games[req.query.id].playerB.cards)
                    games[req.query.id].playerB.cards.push(game.playerA.cards[0])
                    games[req.query.id].playerA.cards.shift()
                    games[req.query.id].turn = 'B'
                    games[req.query.id].playerA.last_message = 'You lost... :('
                    games[req.query.id].playerB.last_message = 'You won!'
                    
                }
                else 
                {
                    console.log(cards[games[req.query.id].playerA.cards[0]].param[req.query.param])
                    console.log(cards[games[req.query.id].playerB.cards[0]].param[req.query.param])
                    rotateArray(games[req.query.id].playerA.cards)
                    rotateArray(games[req.query.id].playerB.cards)
                    console.log('Draw')
                }
            }
            else{
                if(cards[games[req.query.id].playerB.cards[0]].param[req.query.param] > cards[games[req.query.id].playerA.cards[0]].param[req.query.param])
                {
                    console.log('You win!')
                    rotateArray(games[req.query.id].playerB.cards)
                    games[req.query.id].playerB.cards.push(game.playerA.cards[0])
                    games[req.query.id].playerA.cards.shift()
                    games[req.query.id].playerB.last_message = 'You won!'
                    games[req.query.id].playerA.last_message = 'You lost... :('
                }
                else if(cards[games[req.query.id].playerB.cards[0]].param[req.query.param] < cards[games[req.query.id].playerA.cards[0]].param[req.query.param])
                {
                    console.log('You loose')
                    rotateArray(games[req.query.id].playerA.cards)
                    games[req.query.id].playerA.cards.push(game.playerB.cards[0])
                    games[req.query.id].playerB.cards.shift()
                    games[req.query.id].turn = 'A'
                    games[req.query.id].playerB.last_message = 'You lost... :('
                    games[req.query.id].playerA.last_message = 'You won!'

                }
                else 
                {
                    console.log(cards[games[req.query.id].playerA.cards[0]].param[req.query.param])
                    console.log(cards[games[req.query.id].playerB.cards[0]].param[req.query.param])
                    rotateArray(games[req.query.id].playerA.cards)
                    rotateArray(games[req.query.id].playerB.cards)
                    console.log('Draw')
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

    console.log('Fixing last message')
    if ( req.query.player=='A' && games[req.query.id].playerA.last_message == "You lost... :(" )
    {
        games[req.query.id].playerA.last_message = "Waiting for other oponent"
    }
    if ( req.query.player=='A' && games[req.query.id].playerA.last_message == "You won!" )
    {
        games[req.query.id].playerA.last_message = "Your turn"
    }
    if ( req.query.player=='B' && games[req.query.id].playerB.last_message == "You lost... :(" )
    {
        games[req.query.id].playerB.last_message = "Waiting for other oponent"
    }
    if ( req.query.player=='B' && games[req.query.id].playerB.last_message == "You won!" )
    {
        games[req.query.id].playerB.last_message = "Your turn"
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
        playerB:{ cards:cards_index.slice(5,10), last_message: 'Your oponents turn'},
        turn:'A'}

    games[id] = game;

    res.status(200).send({
        version: "1",
        game: game,
    });
});


module.exports = router;