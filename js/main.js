var right_button = document.getElementById("mvright");
var left_button = document.getElementById("mvleft");
var footer = document.getElementById("footer");
var paragraph = document.getElementById("firstparagraph");
var picture = document.getElementById("img");
var quotes = document.getElementById("quotes");
var rose = document.getElementById("rose");
var thesis = document.getElementById("thesis");

pgnm = 1;

slidefunc = function(){
    switch(pgnm){
        case 1:
            thesis.style.display = "none";
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "block";
            footer.style.display = "block";
            paragraph.style.display = "block";
            paragraph.innerHTML = "Photography was first developed in the early 1800s by French Scientists. Very early photographs were blurry, dull, and unintelligible. Advancements in photography in the mid 1800s improved image quality, but because it took hours to take a single photo, photography was mostly still images of the rich with very little facial expression. As time went on, scientific advancments improved photography. In the mid to late 1800s, photography could now be used to photograph more than just lifeless portraits. These advancements lead to the social documentaries of the mid 1800s."
            picture.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZNBXnepQzp7pCf-ky_3lVQHaGD%26pid%3DApi&f=1?random";
            footer.innerHTML = "Niépce, N. (1826, February 9). View from the Window at Le Gras [Photograph]. Saint-Loup-de-Varennes.";
            break;
        case 2:
            thesis.style.display = "block";
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "none";
            footer.style.display = "none";
            paragraph.style.display = "none";
            thesis.innerHTML = "In this website, I will talk about various examples of photography. Through my reasearch, I have discovered that lots of early photography was used to create social reform by highlighting tradgedy within society.";
            break;

        case 3:
            thesis.style.display = "none";
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "block";
            paragraph.style.display = "block";
            footer.style.display = "block";
            paragraph.innerHTML = "The photo of Barricades on rue Saint-Maur was one of the first photos to appear in a newspaper. It depicted Barricades durring the June Days uprising. This document can be used as evidence to show how photography was used to promote social reform, because it highlights the destruction and violence in war in order to persuade the public about war and violence.";
            picture.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.s5Ux6RzAlzERSsn7BvXfAgHaFv%26pid%3DApi&f=1?random";
            footer.innerHTML = "Barricades on rue Saint-Maur. Illustrated London News 8 July 1848, p. 1.";
            break;
        case 4:
            thesis.style.display = "none";
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "block";
            paragraph.style.display = "block";
            footer.style.display = "block";
            paragraph.innerHTML = "The photo, Valley of the Shadow of Death, depicts a grim, baren valley in Crimea with canonballs littered on the floor. This document can be used as evidence to show how photogrpahy was used to promote social reform because Fenton shows the negative sides of was to change english sentiment about the Crimean war.";
            picture.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ti0vvJTTSAGZzEgbMP4lJAHaFz%26pid%3DApi&f=1?random";
            footer.innerHTML = "Fenton, Roger. Valley of the Shadow of Death. 1855";
            break;
        case 5:
            thesis.style.display = "none";
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "block";
            paragraph.style.display = "block";
            footer.style.display = "block";
            paragraph.innerHTML = "In this photo, O’Sullivan captures a photo of the Battle of Gettysburg with countless dead people on the ground. This document can be used as evidence to show how photography was used to promote social reform because O’Sullivan captures pictures of death to persuade the pubic about the validity of the Civil War.";
            picture.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7BW8221fgCR8vTeLLJduwAHaFa%26o%3D6%26pid%3DApi&f=1?random";
            footer.innerHTML = "O’Sullivan, Timothy. The Harvest of Death. 1863";
            break;
        case 6:
            thesis.style.display = "none";
            rose.style.display = "none";
            quotes.style.display = "block";
            picture.style.display = "none";
            paragraph.style.display = "block";
            footer.style.display = "block";
            paragraph.innerHTML = "In London labour and the London poor, Mayhew documents the living conditions of the lower class in London. In this quote, Mayhew explains that in order to change public opinion, he has to communicate to the upper class. This document can be used as evidence to show how photography was used to promote social reform, because Mayhew utilizes photographs along with writing to convey the lower class life in London to the upper class, to promote reform.";
            quotes.innerHTML="\"That one half of the world does not know how the other half lives is an axiom of antiquity, but the truthful revelations and de- scriptions of the London street folk, workers and non-workers, and the means by which they exist, will go a great way to enlighten the educated classes respecting matters which have hitherto been involved in mystery and uncertainty\"";
            footer.innerHTML = "Mayhew, H., & Tuckniss, W. (1861). London labour and the London poor: A cyclopædia of the condition and earnings of those that will work, those that cannot work, and those that will not work. London: Griffin, Bohn, and";
            break;
        case 7:
            thesis.style.display = "none";
            rose.style.display = "none";
            quotes.style.display = "block";
            picture.style.display = "none";
            paragraph.style.display = "block";
            footer.style.display = "block";
            paragraph.innerHTML = "One way photography helped in conveying the public is through the certainty that the photo is real. Although photos are not as credible today, photos in the 1800s where seen as a trusted source. Thomson and Smith utilized this fact to educate the rich about the poor in London. This document can be used as evidence to show how photography was used to promote social reform, because of Thomson and Smith state that through the credibility of photography, they are able to promote change."
            quotes.innerHTML = "\"The unquestionable accuracy of this testimony will enable us to present true types of the London Poor and sheild us from the accusation of either underrating or exaggerating individual peculiarieties of appearance.\""
            footer.innerHTML = "Thomson, J. and Smith, A., 1877. Street Life In London. With Permanent Photographic Illustrations. London: Sampson Low, Marston, Searle, & Rivington";
            break;
        case 8:
            thesis.style.display = "none";
            rose.style.display = "none";
            quotes.style.display = "none";
            picture.style.display = "block";
            paragraph.style.display = "block";
            footer.style.display = "block";
            paragraph.innerHTML = "In The Old Closes and Streets of Glasgow, Thomas Documents the streets of Glasgow by photographing the dirty, thin streets of Glasgow. This document can be utilized as evidence to show how photography was used to promote social reform, because Thomas documents highlight  what needed to be updated in the city of Glasgow, which the city then updated.";
            picture.src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewminate.com%2Fwp-content%2Fuploads%2F2017%2F03%2FAnnan128.jpg&f=1&nofb=1?random"
            footer.innerHTML = "Annan, Thomas, 1829-1887.  The old Closes and Streets of Glasgow. Glasgow, Scotland :Glasgow City Improvement Trust, 1868-1877";
            break;     
        case 9:
            thesis.style.display = "none";
            rose.style.display = "none";
            quotes.style.display = "block";
            picture.style.display = "none";
            paragraph.style.display = "block";
            footer.style.display = "block";
            paragraph.innerHTML = "In How the Other Half Lives, Jacob Riis highlights the decrepit tennaments of New York and immagrent life in the gilded age. In this quote, Riis attempts to communicate to the rich to say that they have caused sufferng and they may not even know it.  This document can be utilized as evidence to show how photography was used to promote social reform, because Jacob Riis attempts to connect the lower class of New York to the wealthy to promote change in New York life.";
            quotes.innerHTML = "\"What if I were to tell you that this alley, and more tenement property in “the Bend,” all of it notorious for years as the vilest and worst to be found anywhere, stood associated on the tax-books all through the long struggle to make its owners responsible, which has at last resulted in a qualified victory for the law, with the name of an honored family, one of the “oldest and best,” rich in possessions and in influence, and high in the councils of the city’s government\""
            footer.innerHTML = "Riis, Jacob A. (Jacob August), 1849-1914. How The Other Half Lives. New York :Garrett Press, 1970";
            break;
        case 10:
            thesis.style.display = "none";
            rose.style.display = "block";
            quotes.style.display = "none";
            picture.style.display = "none";
            paragraph.style.display = "block";
            footer.style.display = "block";
            paragraph.innerHTML = "In Rosevelt’s letter to Riis, Rosevelt writes that he is honored to have his name in Riis’s book and that he is working out social reforms. This document can be used as evidence to show how photography was used to promote social reform, because it shows that the vivid images of Riis were effective at creating change. According to the RAAB Collection \"Roosevelt kept his word, increasing the number of factories that very year.\""
            rose.innerHTML =" \" I take the greatest pride in having my name in your handwriting at the front of your book and my photograph thought worthy to be put in it. If I was foolish enough to need any reward for what I had done, I should feel that I had it ten times over in what you have said about me, old man, in this book. Most of it is undeserved, because there are rose-tinted glasses over your loyal eyes when you look upon those whom you love and who love you. But I won't pretend to say that I regret to have it in, for I do not, and it will ever be a source of keen pride to me to show to my children. Reynolds has just been here to take dinner and I have been trying to plan out some way by which we can straighten the factory inspection mater. I think we shall be able to do it. Always yours, Theodore Roosevelt \" ";
            footer.innerHTML = "Rosevelt, Theodore. Letter to Jacob Riis 17 Feb. 1900. “Theodore Roosevelt Typed Letter Signed to Jacob Riis.” The Raab Collection, www.raabcollection.com/presidential-autographs/theodore-roosevelt-riis. ";
            break;
    }
}

slidefunc()
right_button.onclick = function() {
    if (pgnm == 10) {
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

