import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events =
      [ {
           "q": "show me 12 events in Paris this week",
           "id" : "6faef597-0fdd-43d0-866d-6c5686ded0c1",
           "title" : "Seine Sunset Jazz at Petit Bain",
           "description" : "Unwind with a soulful jazz set on Petit Bain’s rooftop terrace overlooking the river. Craft drinks, small bites, and golden-hour vibes make it a perfect Friday night. Arrive early for best seating.",
           "shortDescription" : "Live jazz on a riverside rooftop barge with Seine views.",
           "imageUrl" : "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
           "location" : "Petit Bain, 7 Port de la Gare, 75013 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-29T18:00:00+02:00",
           "endDateTime" : "2025-08-29T20:00:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",
           "id" : "18753379-9372-4156-9285-638dea0a6542",
           "title" : "Open-Air Cinema Night at Parc de la Villette",
           "description" : "Bring a blanket and settle in for a summer screening on the great lawn at La Villette. Food trucks and deck chairs available on-site; arrive early to grab a spot. English subtitles when applicable.",
           "shortDescription" : "Free outdoor film screening under the stars.",
           "imageUrl" : "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
           "location" : "Parc de la Villette, Prairie du Triangle, 211 Avenue Jean Jaurès, 75019 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-29T19:30:00+02:00",
           "endDateTime" : "2025-08-29T20:45:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",
           "id" : "d702427f-362e-41d4-92e9-26b661400795",
           "title" : "Street Food Night Market at Ground Control",
           "description" : "Taste your way through dozens of pop-up kitchens and local producers at Ground Control. Expect craft drinks, vinyl DJs, and plenty of seating indoors and out. Family-friendly and cashless.",
           "shortDescription" : "Global eats, natural wine, and DJ sets in a lively hangar.",
           "imageUrl" : "https://images.unsplash.com/photo-1533777324565-a040eb52fac1",
           "location" : "Ground Control, 81 Rue du Charolais, 75012 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-29T21:00:00+02:00",
           "endDateTime" : "2025-08-29T22:30:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",  
           "id" : "2e6a1b46-bb49-4d13-81de-88a733acba58",
           "title" : "59 Rivoli After-Hours: Art + Live Sets",
           "description" : "Explore the famed artist squat-turned-gallery across multiple floors after hours. Meet resident artists, catch live sets, and browse unique works for sale. Small bar on-site; stairs inside.",
           "shortDescription" : "Late opening with artist studios, live music, and pop-up bar.",
           "imageUrl" : "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
           "location" : "59 Rivoli, 59 Rue de Rivoli, 75001 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-30T12:00:00+02:00",
           "endDateTime" : "2025-08-30T14:30:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",
           "id" : "f4d9b84f-b8f9-4630-a2c3-40b32739e8d1",
           "title" : "Salsa & Bachata on the Seine (Jardin Tino Rossi)",
           "description" : "Join dancers of all levels for salsa, bachata, and kizomba at the amphitheaters along the quai. Free entry, friendly crowd—come solo or with a partner. Smooth-soled shoes recommended.",
           "shortDescription" : "Open-air Latin dance social by the river.",
           "imageUrl" : "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
           "location" : "Jardin Tino Rossi – Quai Saint-Bernard, 75005 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-30T14:00:00+02:00",
           "endDateTime" : "2025-08-30T18:00:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",
           "id" : "7341b91b-340d-4155-bdbe-22dd50932353",
           "title" : "Morning Yoga in Buttes-Chaumont",
           "description" : "Start your Saturday with a refreshing outdoor vinyasa class near the lake. Bring your own mat and water; suitable for all levels with modifications offered. Meet by the Temple de la Sybille viewpoint.",
           "shortDescription" : "Vinyasa flow with city views in a leafy park.",
           "imageUrl" : "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
           "location" : "Parc des Buttes-Chaumont, 1 Rue Botzaris, 75019 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-30T21:30:00+02:00",
           "endDateTime" : "2025-08-30T23:30:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",
           "id" : "47dd1bec-a0c1-4d53-89ea-8c60ff199192",
           "title" : "Founders Night at Station F: Talks & Networking",
           "description" : "Hear short talks from founders, swap lessons learned, and meet potential collaborators over drinks. Bring a quick pitch or product demo if you’d like to share. Registration at the welcome desk on arrival.",
           "shortDescription" : "Startup lightning talks, demos, and casual networking.",
           "imageUrl" : "https://images.unsplash.com/photo-1518770660439-4636190af475",
           "location" : "Station F, 5 Parvis Alan Turing, 75013 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-31T10:00:00+02:00",
           "endDateTime" : "2025-08-31T12:30:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",
           "id" : "fbdc26db-b73f-44dd-8722-b81fbeeced14",
           "title" : "Sunday Market at Le Carreau du Temple",
           "description" : "Discover seasonal produce, fresh breads, cheeses, and artisanal goods in a beautiful covered market hall. Family-friendly with tastings and rotating guest vendors. Dogs on leash welcome.",
           "shortDescription" : "Local producers, crafts, and gourmet tastings.",
           "imageUrl" : "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
           "location" : "Le Carreau du Temple, 4 Rue Eugène Spuller, 75003 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-31T19:30:00+02:00",
           "endDateTime" : "2025-08-31T21:30:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",
           "id" : "859d1167-98da-4da2-b11b-1bb7d43f344e",
           "title" : "Classical Evening at Église Saint‑Eustache",
           "description" : "Experience resonant acoustics as a chamber ensemble performs beloved Baroque and Romantic pieces, with selections for the historic organ. Quiet entry during movements is appreciated.",
           "shortDescription" : "String ensemble and organ works in a grand Parisian church.",
           "imageUrl" : "https://images.unsplash.com/photo-1464375117522-1311d6a5b81a",
           "location" : "Église Saint‑Eustache, 2 Impasse Saint‑Eustache, 75001 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-31T19:30:00+02:00",
           "endDateTime" : "2025-08-31T21:30:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",
           "id" : "0e1068a6-93ed-4e8f-b164-20e83871bca3",
           "title" : "Rooftop Sunset Session at Le Perchoir Marais",
           "description" : "Head to the BHV rooftop for sundowners above the Hôtel de Ville. Expect a warm, eclectic set spanning house and disco, plus seasonal cocktails and snacks. Smart-casual; limited capacity at peak hours.",
           "shortDescription" : "Cocktails, skyline views, and a laid‑back DJ set.",
           "imageUrl" : "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
           "location" : "Le Perchoir Marais (BHV), 37 Rue de la Verrerie, 75004 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-31T19:30:00+02:00",
           "endDateTime" : "2025-08-31T21:30:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",
           "id" : "ba74ec89-c696-4514-a106-08bf63776603",
           "title" : "Les Frigos Open Studios",
           "description" : "Wander the corridors of Les Frigos to see works-in-progress across painting, sculpture, and multimedia. Artists welcome questions and sell small works and prints on-site. Some stair access only.",
           "shortDescription" : "Meet artists and explore eclectic studios in a former warehouse.",
           "imageUrl" : "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
           "location" : "Les Frigos, 19 Rue des Frigos, 75013 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-31T19:30:00+02:00",
           "endDateTime" : "2025-08-31T21:30:00+02:00"
         }, {
           "q": "show me 12 events in Paris this week",
           "id" : "24e4c1fb-ef7d-413f-b2c4-a1c3999aa0d6",
           "title" : "Roller Disco by the Canal at Point Éphémère",
           "description" : "Lace up for a high-energy roller night by Canal Saint‑Martin with DJs spinning classics and nu‑disco. Limited rental skates available; bringing your own is recommended. Protective gear encouraged.",
           "shortDescription" : "Skate session with funk and disco grooves on the quai.",
           "imageUrl" : "https://images.unsplash.com/photo-1519861531473-9200262188bf",
           "location" : "Point Éphémère, 200 Quai de Valmy, 75010 Paris, France",
           "timezone" : null,
           "startDateTime" : "2025-08-31T19:30:00+02:00",
           "endDateTime" : "2025-08-31T21:30:00+02:00"
         } ];
    return { events };
  }
}