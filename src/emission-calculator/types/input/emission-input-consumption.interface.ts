export interface EmissionInputConsumption {
    incomeLevel: number; // Śr. krajowa + %-ty
    recyclingRate: number; // Brak recyklingu, Część śmieci trafia do recyklingu, Duzo, Wiekszosc
    clothing: number; // Uzywane, Nowe gdy stare sa zniszczone, Regularnie nowe, modne
    packagingType: number; // Nie zwracam uwagi, Minimalnie opakowane, Lubie ladne opakowania
    houseEquipment: number; // Uzywane, Nowe ale uzywam dlugo, Kupuje czesto nowe i modne rzeczy
    entertainmentConsumption: number; // Spacery i rower, Kina i lokale, Techniczne - quady i spadochroniarstwo
    electricityUsage: number; // Bardzo oszczednie, Staram sie nie marnowac, Nie przejmuje sie - stać mnie na to
}