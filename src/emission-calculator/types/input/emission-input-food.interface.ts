export interface EmissionInputFood {
    averageAmountOfFood: number; // Mało, Średnio itd.
    foodSourceLocality: number; // Jem lokalną bez marketów, mały sklep z zyw. lokalna, Towary lokalne i sezonowe, Nie zwracam uwagi na sezonowosc, Egzotyczne
    meatPerWeek: number; // Brak produktów zw. (weganin), Bez mięsa (wegetarianin), 1-2 razy, 3-6 razy, codziennie
    frozenFoodWeekly: number; // wcale, rzadko, 1x tydzień, 2-3 tygodniowo, codziennie
    refridgeratorEfficiency: number; // Brak, Niskoelektywa G-D, Średioefektywna C-B, Energooszczędna A, Bardzo A+
    ovenEfficiency: number; // Elektryczna zwykła, indukcyjna, gazowa, węglowa, Drewno
    additionalFreezer: boolean;
    dishwasher: boolean;
}