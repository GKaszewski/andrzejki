import type { Fortune } from "@/types";
import { useState } from "react";

const FORTUNES: Fortune[] = [
  { id: '1', text: "Nie jedz żółtego śniegu... ani ciasta od Marka.", type: 'funny' },
  { id: '4', text: "Jutrzejszy poranek będzie ciężki, ale warto.", type: 'funny' },
  { id: '6', text: "Twoja dieta zaczyna się... od poniedziałku.", type: 'funny' },
  { id: '7', text: "Unikaj ludzi, którzy jedzą pizzę widelcem.", type: 'funny' },
  { id: '8', text: "Szczęście ci sprzyja, ale na wszelki wypadek zapnij pasy.", type: 'funny' },
  { id: '9', text: "Jeśli myślisz, że nikt o tobie nie myśli – spróbuj nie zapłacić rachunku.", type: 'funny' },
  { id: '10', text: "Czeka Cię podróż życia... prawdopodobnie autobusem nocnym.", type: 'funny' },
  { id: '11', text: "Twoja przyszłość jest jasna... jak ekran telefonu o 3 w nocy.", type: 'funny' },
  { id: '12', text: "Zagraj w lotto. Nie wygrasz, ale emocje gwarantowane.", type: 'funny' },
  { id: '13', text: "Uważaj na rudych blondynów w czarnych butach.", type: 'funny' },
  { id: '14', text: "Wkrótce spotka Cię wielka miłość... albo wielka pizza.", type: 'funny' },

  { id: '2', text: "Twoja miłość czeka tuż za rogiem (albo w lodówce).", type: 'romantic' },
  { id: '5', text: "Ktoś tutaj skrycie Cię podziwia. Rozejrzyj się.", type: 'romantic' },
  { id: '15', text: "Strzała amora trafi Cię w najmniej oczekiwanym momencie.", type: 'romantic' },
  { id: '16', text: "Osoba siedząca naprzeciwko ma Ci coś ważnego do powiedzenia.", type: 'romantic' },
  { id: '17', text: "Twój urok osobisty dzisiaj olśniewa wszystkich. Korzystaj!", type: 'romantic' },
  { id: '18', text: "Wielka miłość przyjdzie, gdy przestaniesz jej szukać.", type: 'romantic' },
  { id: '19', text: "Ktoś o tobie intensywnie myśli. Aż czkawki dostał.", type: 'romantic' },
  { id: '20', text: "Nadchodzący rok przyniesie gorący romans.", type: 'romantic' },

  { id: '3', text: "Unikaj podejmowania ważnych decyzji po 24:00.", type: 'serious' },
  { id: '21', text: "Nie bój się zmian, one prowadzą do celu.", type: 'serious' },
  { id: '22', text: "To, czego szukasz, znajdziesz w najmniej oczywistym miejscu.", type: 'serious' },
  { id: '23', text: "Pamiętaj: nie ma tego złego, co by na dobre nie wyszło.", type: 'serious' },
  { id: '24', text: "Twoja intuicja Cię nie myli – zaufaj jej dzisiaj.", type: 'serious' },
  { id: '25', text: "Szczęście to nie cel, to sposób podróżowania.", type: 'serious' },
  { id: '26', text: "W nadchodzącym roku spełnisz swoje marzenie, o którym zapomniałeś.", type: 'serious' },
  { id: '27', text: "Zrób ten pierwszy krok, którego się boisz.", type: 'serious' },
  { id: '28', text: "Dobra wiadomość nadejdzie z daleka.", type: 'serious' },
];
export const useFortuneCookie = () => {
    const [fortune, setFortune] = useState<Fortune | null>(null);
    const [isCracking, setIsCracking] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);

    const crackCookie = () => {
        if (isCracking || isRevealed) {
            reset();
            return;
        }

        setIsCracking(true);

        setTimeout(() => {
            const random = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
            setFortune(random);
            setIsCracking(false);
            setIsRevealed(true);
        }, 1500)
    }

    const reset = () => {
        setIsRevealed(false);
        setFortune(null);
    }

    return {
        fortune,
        isCracking,
        isRevealed,
        crackCookie,
        reset
    }
}