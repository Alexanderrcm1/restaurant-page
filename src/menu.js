const menuPage = () => `
<h1 id="title">Little Italy</h1>
<h2 id="red-wine-title">Red Wine</h2>
<div id="red-wine1" class="red-wine">
    <h3 class="wine-name">Montepulciano dAbruzzo</h3>
    <p>Cantine Bove(100% Montepulciano)</p>
    <p class="description"> 
    Medium-bodied, generous, typical Montepulciano flavors of dark cherries, black pepper and violets. The acidity is juicy, the tannins are fruity with good balance and structure.
    </p>
    <p class="glass-price"> Glass: $12 </p>
    <p class="bottle-price"> Bottle: $49 </p>
</div>
<div id="red-wine2" class="wine">
    <h3 class="wine-name">Kaid Syrah IGT</h3>
    <p>Alessandro, Camporeale Sicilly (100% Syrah)</p>
    <p class="description"> A rich and full-bodied wine with notes of black berries, roasted coffee, leather, black pepper, with a charming bouquet.
    </p>
    <p class="glass-price"> Glass: $21 </p>
    <p class="bottle-price"> Bottle: $72 </p>
</div>
<div id="red-wine3" class="red-wine">
    <h3 class="wine-name">Barolo San Pietro DOCG</h3>
    <p>Ruggeri Corsini, Alba Piemonte (100% Nebbiolo)</p>
    <p class="description"> 
    Full and elegant taste. Big, nuanced scent with hints of red berries,
    dried roses and violets, as well as well-integrated barrel character.
    </p>
    <p class="glass-price"> Glass: $33 </p>
    <p class="bottle-price"> Bottle: $128 </p>
</div>

<h2 id="white-wine-title">White Wine</h2>
<div id="white-wine1" class="white-wine">
    <h3 class="wine-name">Chardonnay IGT</h3>
    <p>Stocco Trentino, Alto Adige ( 100% Chardonnay )</p>
    <p class="description"> 
    Medium-bodied, fine-tuned fresh and mineral taste of citrus, tropical fruits
    such as peach and mango. In a deep and well-balanced dry style.
    </p>
    <p class="glass-price"> Glass: $13 </p>
    <p class="bottle-price"> Bottle: $51 </p>
</div>
<div id="white-wine2" class="white-wine">
    <h3 class="wine-name">Riesling</h3>
    <p>Pratello, Lago Di Garda, Piemonte ( 100% Riesling )</p>
    <p class="description">
    Silky smooth and well balanced with tropical flavors of mango, papaya, lychee and lime. The smell
    Feels like an explosion of exotic shades such as mango, passion fruit, yellow melon & elderberry.
    </p>
    <p class="glass-price"> Glass: $15 </p>
    <p class="bottle-price"> Bottle: $59 </p>
</div>
<div id="white-wine3" class="white-wine">
    <h3 class="wine-name">Lolly Chardonnay</h3>
    <p>Ruggeri Corsini, Piemonte ( 100% Chardonnay )</p>
    <p class="description"> 
    Soft ectones, a little nutty, ripe fruit & yellow plums. Nutty scents of barrel & mineral and pleasant aftertaste.
    </p>
    <p class="glass-price"> Glass: $22 </p>
    <p class="bottle-price"> Bottle: $85 </p>
</div>

<div class="starters-container">
    <h2 id="startes-title">Starters</h2>
    <div id="starter1" class="starter">
        <h3>Burrata</h3>
        <p class="description">Creamy mozzarella with sun-kissed cherry tomatoes, croutons & beetroot</p>
        <p class="starter-price"> $16 </p>
    </div>
    <div id="starter2" class="starter">
        <h3>Cozze</h3>
        <p class="description">Fresh mussels cooked in white wine with red onion, parsley & cream</p>
        <p class="starter-price"> $18 </p>
    </div>
    <div id="starter3" class="starter">
        <h3>Carpaccio</h3>
        <p class="description">
        Thin beef fillet served with arugula, fresh grated parmesan, lemon & virgin olive oil.</p>
        <p class="starter-price"> $18 </p>
    </div>
</div>

<div class="main-container">
    <h2 id="main-title">Main Dishes</h2>
    <div id="main1" class="mains">
        <h3>Spaghetti alle vongole</h3>
        <p class="description">Spaghetti served with fresh vongole mussels in white wine, garlic, chili, tomato & parsley.</p>
        <p class="main-price"> $25 </p>
    </div>
    <div id="main2" class="mains">
        <h3>Filetto di Manzo</h3>
        <p class="description">
        Grilled beef fillet tournedo topped with parma & mascarpone.
        Served with a long-cooked truffle sauce, Italian potato cake and arugula salad.
        </p>
        <p class="main-price"> $39 </p>
    </div>
    <div id="main3" class="mains">
        <h3>Risotto con Scampi</h3>
        <p class="description">
        Creamy asparagus risotto with pernod flambéed scampi, topped with giant prawns and grated parmesan.</p>
        <p class="starter-price"> $33 </p>
    </div>

    <h2 id="location">Folkungagatan 76,<br> 116 22 Stockholm</h2>
    <div class="open-hours-container">
        <ul>
        <li>Sunday: 12:00 - 21:00</li>
        <li>Monday: 10:00 - 20:00</li>
        <li>Tuesday: 10:00 - 20:00</li>
        <li>Wednesday: 10:00 - 20:00</li>
        <li>Thursday: 10:00 - 20:00</li>
        <li>Friday: 10:00 - 23:00</li>
        <li>Saturday: 17:00 - 00:00</li>
        </ul>
    </div>
</div>

`
export default menuPage;