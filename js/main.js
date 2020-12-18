var right_button = document.getElementById("mvright");
var left_button = document.getElementById("mvleft");
var footer = document.getElementById("footer");
var firstparagraph = document.getElementById("firstparagraph");
var picture = document.getElementById("img");
var quotes = document.getElementById("quotes");
var rose = document.getElementById("rose");

pgnm = 1;

slidefunc = function(){
    switch(pgnm){
        case 1:
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "block";
            picture.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZNBXnepQzp7pCf-ky_3lVQHaGD%26pid%3DApi&f=1?random";
            footer.innerHTML = "Niépce, N. (1826, February 9). View from the Window at Le Gras [Photograph]. Saint-Loup-de-Varennes.";
            break;
        case 2:
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "block";
            picture.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.s5Ux6RzAlzERSsn7BvXfAgHaFv%26pid%3DApi&f=1?random";
            footer.innerHTML = "Barricades on rue Saint-Maur. Illustrated London News 8 July 1848, p. 1.";
            break;
        case 3:
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "block";
            picture.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ti0vvJTTSAGZzEgbMP4lJAHaFz%26pid%3DApi&f=1?random";
            footer.innerHTML = "Fenton, Roger. Valley of the Shadow of Death. 1855";
            break;
        case 4:
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "block";
            picture.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7BW8221fgCR8vTeLLJduwAHaFa%26o%3D6%26pid%3DApi&f=1?random";
            footer.innerHTML = "O’Sullivan, Timothy. The Harvest of Death. 1863";
            break;
        case 5:
            rose.style.display = "none";
            quotes.style.display = "block";
            picture.style.display = "none";
            quotes.innerHTML="\"That one half of the world does not know how the other half lives is an axiom of antiquity, but the truthful revelations and de- scriptions of the London street folk, workers and non-workers, and the means by which they exist, will go a great way to enlighten the educated classes respecting matters which have hitherto been involved in mystery and uncertainty\"";
            footer.innerHTML = "Mayhew, H., & Tuckniss, W. (1861). London labour and the London poor: A cyclopædia of the condition and earnings of those that will work, those that cannot work, and those that will not work. London: Griffin, Bohn, and";
            break;
        case 6:
            rose.style.display = "none";
            quotes.style.display = "block";
            picture.style.display = "none";
            quotes.innerHTML = "\"The unquestionable accuracy of this testimony will enable us to present true types of the London Poor and sheild us from the accusation of either underrating or exaggerating individual peculiarieties of appearance.\""
            footer.innerHTML = "Thomson, J. and Smith, A., 1877. Street Life In London. With Permanent Photographic Illustrations. London: Sampson Low, Marston, Searle, & Rivington";
            break;
        case 7:
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "block";
            picture.src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewminate.com%2Fwp-content%2Fuploads%2F2017%2F03%2FAnnan128.jpg&f=1&nofb=1?random"
            footer.innerHTML = "Annan, Thomas, 1829-1887.  The old Closes and Streets of Glasgow. Glasgow, Scotland :Glasgow City Improvement Trust, 1868-1877";
            break;     
        case 8:
            rose.style.display = "none";
            quotes.style.display = "block";
            picture.style.display = "none";
            quotes.innerHTML = "\"What if I were to tell you that this alley, and more tenement property in “the Bend,” all of it notorious for years as the vilest and worst to be found anywhere, stood associated on the tax-books all through the long struggle to make its owners responsible, which has at last resulted in a qualified victory for the law, with the name of an honored family, one of the “oldest and best,” rich in possessions and in influence, and high in the councils of the city’s government\""
            footer.innerHTML = "Riis, Jacob A. (Jacob August), 1849-1914. How The Other Half Lives. New York :Garrett Press, 1970";
            break;
        case 9:
            rose.style.display = "block";
            quotes.style.display = "none";
            picture.style.display = "none";
            rose.innerHTML =" \" I take the greatest pride in having my name in your handwriting at the front of your book and my photograph thought worthy to be put in it. If I was foolish enough to need any reward for what I had done, I should feel that I had it ten times over in what you have said about me, old man, in this book. Most of it is undeserved, because there are rose-tinted glasses over your loyal eyes when you look upon those whom you love and who love you. But I won't pretend to say that I regret to have it in, for I do not, and it will ever be a source of keen pride to me to show to my children. Reynolds has just been here to take dinner and I have been trying to plan out some way by which we can straighten the factory inspection mater. I think we shall be able to do it. Always yours, Theodore Roosevelt \" ";
            footer.innerHTML = "Rosevelt, Theodore. Letter to Jacob Riis 17 Feb. 1900.";
            break;
    }
}

slidefunc()
right_button.onclick = function() {
    if (pgnm == 9) {
        slidefunc()
        return;
    } else {
        pgnm++;
        slidefunc()
    }
}

left_button.onclick = function() {
    if (pgnm == 1) {
        slidefunc()
        return;
    } else {
        pgnm--;
        slidefunc()
    }
}

