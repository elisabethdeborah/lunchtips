const infoRestauranger=document.querySelector('#info-restauranger');
const restauranger=[];

const mymap = L.map('mapid').setView([57.72040, 12.94101], 15);
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);
let circle = L.circle([57.72040, 12.94101], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.3,
            radius: 280
        }).addTo(mymap);
const myIcon = L.icon({
            iconUrl: 'img/sol-ikon-svart-kontur.svg',
            iconSize: [38, 38],
            popupAnchor: [0, -10]  
        });


class Restaurang{
    constructor(name, foodType, address, latitude, longitude, website, t, w, ikon, src){
    this.name=name;
    this.foodType= foodType;
    this.address=address;
    this.latitude=latitude;
    this.longitude=longitude;
    this.website=website;
    this.t=t;
    this.w=w; 
    this.ikon=ikon;
    this.src=src;
    restauranger.push(this)
    } 
}

const grillOGryta= new Restaurang('Grill & Gryta', 'Persiskt', 'Bäckegränd 5, Borås', '57.71998', '12.94231', '<a style="color:#32b7d9" href="https://sv-se.facebook.com/grillochgryta/">Grill & Gyta på facebook</a>', [-20,-15,-10,-5,0,5,10,15], [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27], '<img style="height:50px" src="img/iran.png"/>','Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>')
const FruitsAndFriends=new Restaurang('Fruits & Friends', 'Juicebar', 'Allégatan 48, Borås', '57.72023', '12.94237', '<a style="color:#9ad93d" href="https://www.fruitsandfriends.se/">fruitsandfriends.se</a>', [15,20,25,30,35], [4,5,6,7,8,9,10,11,18,19,20,21], '<img style="height:50px; border-radius:50%" src="img/blender.png"/>', 'Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const ShawarmaBorås=new Restaurang('Shawarma Borås', 'Mellanöstern', 'Österlånggatan 50, Borås', '57.71993', '12.94171', '<a style="color:#32b7d9" href="https://sv-se.facebook.com/shawarmaboras">Shawarma Borås på facebook</a>', [10,15,20,25,30,35], [1,2,3,4,5,6,11,21],'<img style="height:60px" src="img/food-and-restaurant.png"/>','Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const YasminGrill=new Restaurang('Yasmin Grill', 'Mellanöstern', 'Allégatan 44, Borås', '57.72060', '12.94214', '<a style="color:#32b7d9" href="https://sv-se.facebook.com/Yasmin.Grill.44/">Yasmin Grill på facebook</a>', [15,20,25,30,35], [1,2,3],'<img style="height:50px" src="img/food-and-restaurant.png"/>','Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const Futomaki=new Restaurang('Futomaki', 'sushi' ,'Allégatan 48, Borås', '57.72014', '12.94243', '<a style="color:#9ad93d" href="http://minmatmeny.se/meny/boras/170/futomaki-sushibar">futomaki-sushibar</a>', [20,25,30,35], [1,2,3,4], '<img style="height:50px" src="img/japan.png"/>','Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const NamasteNepal=new Restaurang('Namaste Nepal', 'Nepalesiskt', 'Allégatan 32, Borås', '57.72173', '12.94138', '<a style="color:#9ad93d" href="https://www.namastenepal.se/">namastenepal.se</a>', [-20,-15,-10,-5,0,5,10], [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27], '<img style="height:50px" src="img/nepal.png"/>','Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const Tugg=new Restaurang('Tugg Burgers', 'Amerikanskt', 'Västerlånggatan 12, Borås', '57.72193', '12.93818', '<a style="color:#9ad93d" href="http://www.tuggburgers.se/">tuggburgers.se</a>', [-20,-15,-10,-5,0,5,10,15], [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27], '<img style="height:50px" src="img/united-states.png"/>','Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const RawFoodCafe=new Restaurang('Raw Food Café', 'Raw Food', 'Österlånggatan 61, Borås', '57.71871', '12.94273', '<a style="color:#9ad93d" href="https://www.rawfoodcafe.se/">rawfoodcafe.se</a>', [10,15,20,25], [1,2,3,4,11,21],'<img style="height:50px; border-radius:50%" src="img/fruit.png"/>', 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const Systramii=new Restaurang('Systramii', 'Raw Food-bar', 'Lilla Brogatan 19, Borås', '57.72031', '12.93983', '<a style="color:#9ad93d" href="https://www.systramii.se/">systramii.se</a>', [25,30,35], [1,2,3,4,21],'<img style="height:50px; border-radius:50%" src="img/fruit.png"/>', 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const Cyrano=new Restaurang('Cyrano', 'Pizza m.m.', 'Österlånggatan 21, Borås', '57.72253', '12.94016', '<a style="color:#9ad93d" href="https://www.cyrano.se/meny/cyrano-boras">cyrano.se</a>', [-5,0,5,10,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],'<img style="height:50px; border-radius:50%" src="img/pizza.png"/>', 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')

restauranger.forEach((element)=>{   
    const listobjekt=document.createElement('div');
    listobjekt.innerHTML=`
        <div style="font-size: 24px; color:#ff9706; font-weight: 500">${element.name}</div>
        <div>${element.foodType}</div>
        <div>${element.ikon}</div>
        <div>${element.address}</div>
        <div>${element.website}</div>
        <div style="font-size:12px; margin-top: 10px">${element.src}</div>
        `;       
        document.querySelector('#alla-info').appendChild(listobjekt)
        ;
        L.marker([element.latitude, element.longitude], {icon: myIcon}).bindPopup(`<h3 class="popup-namn">${element.name}</h3> <br> <p id="popup">${element.address} <br>${element.website}</p>`).addTo(mymap).openPopup().riseOnHover;
    listobjekt.addEventListener('click', e=>{
           L.marker([element.latitude, element.longitude], {icon: myIcon}).bindPopup(`<h3 class="popup-namn">${element.name}</h3> <br> <p id="popup">${element.address} <br>${element.website}</p>`).addTo(mymap).openPopup().riseOnHover;
    })
})
