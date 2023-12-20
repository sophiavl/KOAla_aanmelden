import React, { useState } from 'react';
import styles from '../styles/app.module.scss';
import Koala from '../components/koala';
import KoalaInfo from '../components/koalaInfo';
import AanmeldForm from '../components/aanmeldForm';

function App(){

    const [koalaClicked, setKoalaClicked] = useState(false);
    const [koalaInfoToShow, setKoalaInfoToShow] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [aanmeldClicked, setAanmeldClicked] = useState(false);

    const koalaDescriptions = {
        'BBQ: Alaskadag':'Op 18 oktober wordt Alaska dag gevierd. We vieren dan dat Alaska werd overgenomen van het toenmalige tsarenrijk Rusland. Dit alles heeft zowel niks te maken de activiteit, als met K.I.N.K. ID, maar het was gewoon ludieker om het zo te noemen. Kortom kom gezellig met ons BBQ`en!',
        'Poolen': 'Kom met ons poolen en borrelen! K.I.N.K. ID is vaak te vinden in de Poolcafés van Leiden. Of we er ook echt daadwerkelijk goed in zijn… dat is te betwijfelen. Het is in ieder geval altijd vermakelijk!',
        'Kampvuuravond': 'Gitaar, kampvuur, marshmallows en gluhwein. De perfecte ingrediënten voor een knusse avond. Kom gezellig kletsen en kampvuurliedjes zingen! En uh… Anyway, here’s Wonderwall',
        'Spebibo':'Ben je het zat om elke keer weer Klok en Lager weg te tikken? Vind je het tijd voor bier met kwaliteit? Kom dan naar de Speciaal Bier borrel! Geniet van een aantal heerlijke speciaalbiertjes, om vervolgens toch weer over te gaan naar goedkoop bier.',
        'DinerKKT' :'Een kamer kroegentocht waarbij je niet alleen drankjes krijgt in elke kamer maar ook eten. Je kan genieten van een voorgerecht, hoofdgerecht en nagerecht.Zowel je eten als je drankjes worden bereid door ons! Wat wil je nog meer?!',
        'Tour de Chambre':'Oftewel een kamer kroegentocht, maar het klinkt gewoon chiquer in het Frans. Bij een kamer kroegentocht ga je langs verschillende kamers en drink je daar een drankje. Vaak heeft dit ook een thema. K.I.N.K. ID is een muziek en festival dispuut, daarom is het thema ook: muziekgenres',
        'Indoor Kamperen':'Dé manier om Kinkers echt goed te leren kennen en te zien hoe een KINK weekend er aan toe gaat. Zoals de titel al doet vermoeden is het ‘indoor’, dus binnen. Je zal niet door slecht weer natregenen ',
        '2001 à GoGo':'K.I.N.K. ID staat bekend om haar liefde voor muziek. We moeten daarom natuurlijk wel even testen wat jullie weten van muziek! Kom daarom naar de 2001 a Gogo, de allerleukste muziek quiz!',
        'Kaas Port Jazz':'Dit is de perfecte KINK activiteit, want de helft van het dispuut lust geen kaas en de andere helft lust geen port. Desalniettemin is dit een hele leuke activiteit met goede kaas, goede port EN goede jazz.',
    }
    
    const handleKoalaClick = (title) => {
        setKoalaClicked(true);
        setKoalaInfoToShow(title);

    };

    const handleAanmeldClick = () => {
        setAanmeldClicked(true);
        setKoalaClicked(true);
        setShowForm(true);
    }
        return(
            <section className={styles.homepage}>
                <section className={styles.containerMiddle}>
                    <header className={styles.header}>
                    <h1>K.I.N.K. ID</h1>
                    <h2>KOAlas</h2>
                    </header>
                    {!koalaClicked && (
                        <section className={styles.koalas}>
                        <Koala title='BBQ: Alaskadag' onClick={() => handleKoalaClick('BBQ: Alaskadag')}></Koala>
                        <Koala title='Poolen' onClick={() => handleKoalaClick('Poolen')}></Koala>
                        <Koala title='Kampvuuravond' onClick={() => handleKoalaClick('Kampvuuravond')}></Koala>
                        <Koala title='Spebibo' onClick={() => handleKoalaClick('Spebibo')}></Koala>
                        <Koala title='DinerKKT' onClick={() => handleKoalaClick('DinerKKT')}></Koala>
                        <Koala title='Tour de Chambres' onClick={() => handleKoalaClick('Tour de Chambres')}></Koala>
                        <Koala title='Indoor Kamperen' onClick={() => handleKoalaClick('Indoor Kamperen')}></Koala>
                        <Koala title='2001 à GoGo' onClick={() => handleKoalaClick('2001 à GoGo')}></Koala>
                        <Koala title='Kaas Port Jazz avond' onClick={() => handleKoalaClick('Kaas Port Jazz avond')}></Koala>
                        </section>
                    )}
                    
                    {koalaInfoToShow && !aanmeldClicked && (
                        <KoalaInfo 
                            name={koalaInfoToShow} 
                            description={koalaDescriptions[koalaInfoToShow]} 
                            onAanmeldClick={handleAanmeldClick}></KoalaInfo>
                    )}

                    {showForm && (
                        <AanmeldForm></AanmeldForm>
                    )}
                    </section>
            </section>
        )
    }

export default App;