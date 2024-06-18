let url = 'https://api.unsplash.com/search/photos?query=winter&per_page=30&orientation=landscape&client_id=93s9J6-E0HwDTg9a7tDuv3gii6TNyMFb1LxAp03ISY8';
const gallery = document.querySelector('.main-container');
const btn = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');
const exit = document.querySelector('.search__cleane');
const random = document.querySelector('.random-btn');

let themes = [
  "animals","3d","kitty","abstract","nature","girls","starry-sky","blue","logos","black","people","art","owl","canvas","plain","beach","brands","spikelets","feather","kitten","dark","trees","cars","patterns","paint","textures","magic","light","transport","circles","toyota","dry","texture","background","light-coloured","pictures","rabbits","universe","anime","color","red","inspiration","autumn","tigers","money","red-panda","night","girl","landscape","macro","couple","waterfall","fantasy","notebook","motley"
  ,"bricks","cat","sunset","silhouette","tiger","opinion","moon","phrase","galaxy","squirrel","football","lion","fluid-art","road","space-suit","stripes","assassin's-creed","multicolored","weimaraner","flower","iron","front-view","germany","snow","aggressive","wavy","cinema","village","tropics","wall","flamingo","shop","aurora-borealis","reflection","newcastle-united","storm","funny","sunflowers","batman","japan","night-city","shine","christmas","ewok","garden","despicable-me","lines","volkswagen","music"
  ,"monstera","dinosaur","architecture","technology","motivation","brick-wall","wings","code","robots","evening","green","parquet","nebula","cube","flowers","ice","games","scheme","sucker-punch","aston-martin","cartoon","joystick","cyberpunk","police","norway","cities","transformers","line","stones","digital-art","food","fog","planets","romance","brush","winter","heart","holidays","manchester-united","cats","sports-car","sweden","bonfire","ozzy-osbourne","giraffe","side-view","plane"
  ,"yellow","symbols","drawing","pug","bamboo","black-background","christmas","kayak","fireworks","sky","pair","inscription","ship","neon","characters","zebra","guinea-pig","hd","avengers","helix-nebula","portrait","dragon","water","car","still-life","grapes","sparks","tulips","lumen","snowflakes","tinsel","wolf","boat","pastel","panda","painting","stars","new-year","city-lights","black-and-white","joker","lava","cupcakes","board","austria","equipment","lakes","vector","fingers","leaves","black-and-white"
  ,"palms","iceland","forest","bmw","miscellaneous","mercedes","christmas-tree","city","twilight","races","ixora","butterfly","house","turn","bleach","orange","bubbles","ukulele","gleam","colors","apple","gradient","dawn","naruto","human","coast","emoticon","roses","suv","volcano","fujiyama","fiction","room","panda-kung-fu","india","divorces","graffiti","spring","violet","broken","pickup","love","honda-fury","pinguins","fire","stone","predator","range-rover","android","robert-pattinson","toyota-tacoma"
  ,"machine","horse","wood","back-view","bird","mountains","desert","purple","jellyfish","auto","grunge","signboards","stains","darkly","miscellanea","future","fantastic","smooth","new-york","palm","camera","scale","rain","doberman","beverage","spacesuit","glass","rivers","brunette","oar","men","picture","flame","mountain","flight","cup","london","cameras","cheetah","lebanon","sea","chess","metal","glare","minimalism","artificial","mosaic","person","canada","basketball","view-from-above","pink","shining"
  ,"skyscrapers","greens","drops","quote","horizon","windows","asteroids","heidelberg","turquoise","cat","internet","shadow","hiroshima-castle","books","planks","deer","suzuki-b-king","billiards","toyota-gr-yaris","lock","firework","vertex","royal-cheetah","landmark","sheikh-zayed-mosque","italy","halloween","futuristic","tuscany","rose","coffee","flag","black-hole","sports","plants","wolfs","fruits","hedgehogs","cactuses","butterflies","ostrich","dogs","geese","birds","bolt","houses","bridges"
  ,"porsche","sweet-cherry","turtles","strawberry","grass","fields","insects","rodents","ducks","hamsters","pebble","roads","eon-flux","dolfins","actors","cherry","glamour","bees","horses","pirats","homer-simpson","scrat","nissan","parrots","ships","pansies","dragons","maserati","eggs","easter","simpsons","ice-age","unicorns","explosions","smoke","hearts","children","art-photo","swords","mice","god-of-war","poppies","objective","sun","angelina-jolie","lg","honda","lilac","snow-leopard","lions"
  ,"streets","cones","needle","mersedes","savanna","pine","bananas","gothic","artists","seagulls","jack-frost","dessert","chocolate","santa-claus","spider-man","flags","great-britain","soulcalibur-legends","shakira","alfa-romeo","tuning","walls","tools","guitars","mitsubishi","acura","hellgate","lemons","oranges","tails","little-red-riding-hood","david-beckham","berlin","decorations","salute","dragonflies","audi","lakers","dandelions","chrysler","caterpillars","chicks","wall-e","miners","death","clouds"
  ,"canyon","bugatti","airplanes","tom-clancy's-hawx","evangelion","waves","shamrock","serfing","dragon-age","force-unleashed","star-wars","toys","scratte","objects","sand","up","sushi","salads","nicole-scherzinger","pussycat-dolls","jennifer-lopez","apples","uncharted","radio","parks","dark-knight","angels","sharks","hugo-reyes","diablo","lost","dodge-challenger","yachts","caves","pigeons","lightning","lineage-ll","lamborghini","avril-lavigne","vegetables","waterfalls","witcher","interior","invisible-war"
  ,"helicopters","chevrolet","house","hugh-laurie","pizza","robert-sean-leonard","motorcycles","pugs","zodiac","fir-trees","paris","croissants","cups","demons","bears","pearl-harbor","tablewares","benelli","jaguar","mclaren","chopster","pontiac","aquariums","headphones","lemurs","shepherds","pears","fishes","bentley","fallout","shards-of-alara","summer","castles","bee-movie","deers","skoda","leopards","devil-may-cry","swans","fallen-angel","cheese","vine","attractions","waffles","puma","camomile","street-fighter"
  ,"web","blueberry","chrysanthemum","angels-and-demons","snakes","fiat","fortune-arterial","ford","narcissussi","chameleons","mustang","pepper","kiwi","raccoons","bluebells","need-for-speed","prostreet","mazda","new-moon","vin-diesel","chains","coca-cola","amy-lee","evanescence","ferrari","modern-warfare-2","panthers","call-of-duty","matrix","revolutions","golf","meltdown","anne-hathaway","alice-in-wonderland","episode-iii","lotus","giraffes","hyacinth","monica-bellucci","hummer"
  ,"statue-of-liberty","you-don't-mess-with-the-zohan","formula-1","adam-sandler","lilies","resident-evil","zero","lizards","masks","metro-2033","king-of-fighters","meat","gamburgers","prince-of-persia","humming-birds","friendship","mashrooms","peonies","madagascar","escape-africa","gestures","prototypes","frogs","gerard-butler","x-men","eiffel-tower","wasps","office","raspberry","hancock","fast-&-furious","lime","will-smith","scorpions","ville-valo","spiders","heroes","olympics","dollar","james-bond"
  ,"shells","mini-cooper","ladybugs","valentine's-day","paintings","bouquets","asia","alien","gladiolus","snoop-doggy-dogg","wedding","stealth","milla-jovovich","rings","candles","hieroglyph","peugeot","garfild","killzone-2","immortal","subaru","cobra","koalas","ducati","drinks","friday-the-13th","dolls","postcards","rihanna","kangaroo","olivia-wilde","beluga","lexus","underworld","death-note","oblivion","elder-scrolls","mona-lisa","monuments","pandas","carbon","bindweed","blue-cornflowers"
  ,"half-life","swimming","shrek","beer","tom-hanks","coals","peaches","wheat","stonehenge","infamous","whales","opel","linkoln","guinea-pigs","eagles","dead-rising","zombies","pirates-of-the-caribbean","weapon","infinity","heather","world-of-warcraft","varans","michael-jackson","trucks","kate-beckinsale","clear-sky","tekken","till-lindemann","rammstein","bilberries","dodge-viper","fred-perry","fox","avatar","pigs","ferrets","grand-theft-auto","cadillac","signs","catwoman","flies","hitman","orks","rams"
  ,"boats","tower-of-pisa","pavel-volya","comedy-club","van-helsing","hugh-jackman","ratatouille","icebergs","bicycles","johnny-depp","sweeney-todd","chelsea","cows","dinosaurs","snowdrops","nicolas-cage","ghost-rider","great-wall-of-china","splinter-cell","fernando-ricksen","igor","aion","warhammer","brute-force","slipknot","candies","red-alert","penelope-cruz","crows","monkeys","dawn-of-the-dinosaurs","pyramids","colosseum","crocodiles","rainbow","snails","master-yoda","hulk","antarctica","arctic","watercrafts"
  ,"big-ben","clock","watermelons","quince","crayfish","boxing","pearls","team-fortress-2","depeche-mode","motocross","ladders","trains","renault","balloons","fiona","octopus","legends-of-qin","hippos","bioshock","egypt","seat","tupac-shakur","ice-cream","sphinx","gold","bobcats","microsoft","bugs","chronicles-of-narnia","supernatural","elephants","medals","victory-day","godfather","teddy-bear","skeletons","parkour","mortal-online","berries","antonio-banderas","cookies","mortal-kombat","cossacks","crosses"
  ,"henry-ian-cusick","jewelry","briar","final-fantasy","tanks","albert-einstein","tennis","cabbage","britney-spears","peacocks","accord","lego","heroes-of-might-and-magic","keanu-reeves","constantine","castlevania","marilyn-monroe","grasshoppers","snowboarding","sponge-bob","warcraft","uma-thurman","kill-bill","red-caviar","turok","wheelman","jessica-alba","everquest","saw","madonna","lily-of-the-valley","volvo","camels","beyonce-knowles","overlord","daniel-craig","currant","blood"
  ,"halo","disciples","scarlett-johansson","tangerines","sid","sydney","cranes","inglorious-bastards","pumpkin","moskow","kremlin","jesus","pekingese","watchmen","50-cent","sakura","necrovision","crabs","blood-magic","toucans","unfamous","colin-farrell","walt-disney","spaniel","legion","gamer","jesse-gordon-spenser","lighthouses","leonardo-dicaprio","spartacus","venice","spellforce","swamp","alan-rickman","harry-potter","game","king-kong","starcraft","rally","gooseberry","moskvich"
  ,"dark-defener","rocknrolla","kristen-stewart","g-unit","star-trek","cherry-plum","forbidden-kingdom","kia","dance","step-up","ascari","prison-break","wentworth-miller","mike-tyson","otters","isuzu","citroen","hyundai","seals","arnold-schwarzenegger","sea-lions","terminator","billy-idol","polar-foxes","sssr","silkroad","eminem","moray","coral","timeshift","yamaha","porcupine","ronaldinho","last-airbender","lord-of-the-rings","any-lorak","davies-jeremy","crimson-skies"
  ,"peter-pan","carnations","open-season","water-lilies","natalie-portman","fountain","battlefield","darren-bent","crysis","heathcliff-ledger","ferns","expendables","adidas","disneyland","eric-roberts","pineapples","samuel-jackson","paul-bettany","whiskas","buddha","ghostbusters","predators","clown-fish","dart-vader","iron-man","starfish","killer-whales","windsurfing","300","dirty-dancing","hawks","jennifer-grey","patrick-swayze","skunks","lindsay-lohan","taj-mahal","plum","mass-effect"
  ,"nightmare-before-christmas","land-rover","popcorn","indiana-jones","harrison-ford","national-treasure","9-company","nastya-kamenskih","paul-walker","bob-marley","birches","age-of-empires","icons","suzuki","public-enemies","jean-claude-van-damme","emma-watson","sylvester-stallone","jason-statham","jet-li","mafia","too-human","pepsi","mitsuoka-orochi","fringe","charlize-theron","adrien-brody","marlon-wayans","rolls-royce","v-for-vendetta","hip-hop","rogue-warrior","doom","ewan-mcgregor"
  ,"coconuts","snowman","south-park","inter","blackberry","jensen-ackles","winnie-the-pooh","hello-kitty","duel-of-the-warlocks","masha-and-the-bear","megan-fox","princess-and-the-frog","hockey","alvin-and-the-chipmunks","chipmunks","carlsson","pagani","bush","monsters","war","blitzkrieg","saints-row","counter-strike","just-cause","koenigsegg","storks","little-mermaid","cinnamon","las-vegas","piano","mickey-rourke","shuttle","cristiano-ronaldo","dexter","tron","nike","duke-nukem","florent-malouda","book-of-eli"
  ,"buffy-the-vampire-slayer","jared-padalecki","johnny-knoxville","lacoste","violins","nicole-kidman","zenit","rapunzel","taxi","jackass","silent-hill","sergey-bezrukov","megamind","lie-to-me","gerberas","tim-roth","bulletstorm","jack-daniels","gorillaz","point-blank","wrestling","orlando-bloom","conan","pelicans","dead-space","vocaloids","rambo","korn","kyiv","james-mcavoy","anakin-skywalker","hayden-christensen","liverpool","matthew-mcconaughey","nuts","misha-collins","zombieland","usa"
  ,"daniel-radcliffe","brink","superman","louis-armstrong","heron"
];

function createImg(url){
  const img = document.createElement('img');
  img.classList.add('gallery-img');
  img.src = `${url}`;
  img.alt = 'image';
  gallery.append(img);
}

function deleteImg(){
  let images = document.querySelectorAll('.gallery-img');
  images.forEach(el => el.remove());
}

function searchImg(){
  if(input.value == '') {input.value = 'winter'};
  let searchValue = input.value;
  searchValue = searchValue.replace(/[' ']/g, '-').toLowerCase(); 
  url = `https://api.unsplash.com/search/photos?query=${searchValue}&per_page=30&orientation=landscape&client_id=93s9J6-E0HwDTg9a7tDuv3gii6TNyMFb1LxAp03ISY8`;
  deleteImg();
  getData();
}

function emptyResult(bool){
  let span = document.createElement('span');
  let spanList = document.querySelectorAll('.gallery-text');
  if(bool == true && spanList.length < 1){
    span.classList.add('gallery-text');
    span.innerHTML = 'Not found';
    gallery.append(span);
  }
  if(bool == false){
    spanList.forEach(el => el.remove())
  }
}

async function getData(){
  const res = await fetch(url);
  const data = await res.json();
  data.results.map(el => createImg(el.urls.regular))
  if(data.results.length == 0) {emptyResult(true)} 
  else{ emptyResult(false)}

  console.log(data.results);
}

getData();


input.addEventListener('focus', () => exit.classList.remove('undisplay'));
input.addEventListener('blur', () => {if(input.value == '') {exit.classList.add('undisplay')}});
exit.addEventListener('click', () => {input.value = ''; exit.classList.add('undisplay')});
random.addEventListener('click', function(){
  let value = Math.floor(Math.random() * themes.length);
  console.log(value);
  input.value = themes[value].replace(/[-]/g, ' ');
  exit.classList.remove('undisplay')
  searchImg();
});

btn.addEventListener('click', searchImg)

input.addEventListener('keypress', function(key){
  if(key.code == 'Enter') searchImg();
})