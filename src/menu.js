const menuPage = () => `
<h1 id="title">Little Italy</h1>
<h2 id="red-wine-title">Red Wine</h2>
<div id="red-wine1" class="red-wine">
    <h3 class="wine-name">Montepulciano dAbruzzo</h3>
    <em>Cantine Bove(100% Montepulciano)</em>
    <p class="description"> 
    Medium-bodied, generous, typical Montepulciano flavors of dark cherries, black pepper and violets.<br> The acidity is juicy, the tannins are fruity with good balance and structure.
    </p>
    <span class="glass-price"> Glass: $12<br>Bottle: $49 </span>
</div>
<div id="red-wine2" class="wine">
    <h3 class="wine-name">Kaid Syrah IGT</h3>
    <em>Alessandro, Camporeale Sicilly (100% Syrah)</em>
    <p class="description"> A rich and full-bodied wine with notes of black berries, roasted coffee, leather, black pepper, with a charming bouquet.
    </p>
    <span class="glass-price"> Glass: $21<br>Bottle: $72 </span>
</div>
<div id="red-wine3" class="red-wine">
    <h3 class="wine-name">Barolo San Pietro DOCG</h3>
    <em>Ruggeri Corsini, Alba Piemonte (100% Nebbiolo)</em>
    <p class="description"> 
    Full and elegant taste. Big, nuanced scent with hints of red berries,
    dried roses and violets, as well as well-integrated barrel character.
    </p>
    <span class="glass-price"> Glass: $33<br>Bottle: $128 </span>
</div>

<h2 id="white-wine-title">White Wine</h2>
<div id="white-wine1" class="white-wine">
    <h3 class="wine-name">Chardonnay IGT</h3>
    <em>Stocco Trentino, Alto Adige ( 100% Chardonnay )</em>
    <p class="description"> 
    Medium-bodied, fine-tuned fresh and mineral taste of citrus, tropical fruits
    such as peach and mango. In a deep and well-balanced dry style.
    </p>
    <span class="glass-price"> Glass: $13<br>Bottle: $51 </span>
</div>
<div id="white-wine2" class="white-wine">
    <h3 class="wine-name">Riesling</h3>
    <em>Pratello, Lago Di Garda, Piemonte ( 100% Riesling )</em>
    <p class="description">
    Silky smooth and well balanced with tropical flavors of mango, papaya, lychee and lime. The smell
    Feels like an explosion of exotic shades such as mango, passion fruit, yellow melon & elderberry.
    </p>
    <span class="glass-price"> Glass: $15<br>Bottle: $59 </span>
</div>
<div id="white-wine3" class="white-wine">
    <h3 class="wine-name">Lolly Chardonnay</h3>
    <em>Ruggeri Corsini, Piemonte ( 100% Chardonnay )</em>
    <p class="description"> 
    Soft ectones, a little nutty, ripe fruit & yellow plums. Nutty scents of barrel & mineral and pleasant aftertaste.
    </p>
    <span class="glass-price"> Glass: $22<br>Bottle: $85 </span>
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
        <span class="starter-price"> $18 </span>
    </div>
    <div id="starter3" class="starter">
        <h3>Carpaccio</h3>
        <p class="description">
        Thin beef fillet served with arugula, fresh grated parmesan, lemon & virgin olive oil.</p>
        <span class="starter-price"> $18 </span>
    </div>
</div>

<div class="main-container">
    <h2 id="main-title">Main Dishes</h2>
    <div id="main1" class="mains">
        <h3>Spaghetti alle vongole</h3>
        <p class="description">Spaghetti served with fresh vongole mussels in white wine, garlic, chili, tomato & parsley.</p>
        <span class="main-price"> $25 </span>
    </div>
    <div id="main2" class="mains">
        <h3>Filetto di Manzo</h3>
        <p class="description">
        Grilled beef fillet tournedo topped with parma & mascarpone.
        Served with a long-cooked truffle sauce, Italian potato cake and arugula salad.
        </p>
        <span class="main-price"> $39 </span>
    </div>
    <div id="main3" class="mains">
        <h3>Risotto con Scampi</h3>
        <p class="description">
        Creamy asparagus risotto with pernod flambéed scampi, topped with giant prawns and grated parmesan.</p>
        <span class="main-price"> $33 </span>
    </div>

    <h4 id="location">Folkungagatan 76,<br> 116 22 Stockholm</h4>
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