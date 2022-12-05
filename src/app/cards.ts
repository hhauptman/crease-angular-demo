export enum Suit {
  room = 0,
  break, // red -- diamond
  barricade, // black -- spades
  lock, // red -- heart
  key, // black -- clubs
}

export interface Card {
  id: number;
  suit: Suit;
  value: number;
  imageRef: string;
}

export const cards: Card[] = [
  {
    id: 0,
    suit: Suit.room,
    value: 4,
    imageRef: 'assets/cards/red_joker.svg',
  },
  {
    id: 1,
    suit: Suit.room,
    value: 1,
    imageRef: 'assets/cards/ace_of_diamonds.svg',
  },
  {
    id: 2,
    suit: Suit.room,
    value: 1,
    imageRef: 'assets/cards/ace_of_spades.svg',
  },
  {
    id: 3,
    suit: Suit.room,
    value: 1,
    imageRef: 'assets/cards/ace_of_hearts.svg',
  },
  {
    id: 4,
    suit: Suit.room,
    value: 1,
    imageRef: 'assets/cards/ace_of_clubs.svg',
  },
  {
    id: 5,
    suit: Suit.room,
    value: 2,
    imageRef: 'assets/cards/2_of_diamonds.svg',
  },
  {
    id: 6,
    suit: Suit.room,
    value: 2,
    imageRef: 'assets/cards3/2_of_spades.svg',
  },
  {
    id: 7,
    suit: Suit.room,
    value: 2,
    imageRef: 'assets/cards/2_of_hearts.svg',
  },
  {
    id: 8,
    suit: Suit.room,
    value: 2,
    imageRef: 'assets/cards/2_of_clubs.svg',
  },
  {
    id: 9,
    suit: Suit.room,
    value: 3,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 10,
    suit: Suit.room,
    value: 3,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 11,
    suit: Suit.room,
    value: 3,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 12,
    suit: Suit.room,
    value: 3,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 13,
    suit: Suit.room,
    value: 4,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 14,
    suit: Suit.room,
    value: 4,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 15,
    suit: Suit.room,
    value: 4,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 16,
    suit: Suit.room,
    value: 4,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 17,
    suit: Suit.break,
    value: 5,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 18,
    suit: Suit.break,
    value: 6,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 19,
    suit: Suit.break,
    value: 7,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 20,
    suit: Suit.break,
    value: 8,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 21,
    suit: Suit.break,
    value: 9,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 22,
    suit: Suit.break,
    value: 10,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 23,
    suit: Suit.break,
    value: 11,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 24,
    suit: Suit.break,
    value: 12,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 25,
    suit: Suit.break,
    value: 13,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 26,
    suit: Suit.barricade,
    value: 5,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 27,
    suit: Suit.barricade,
    value: 6,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 28,
    suit: Suit.barricade,
    value: 7,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 29,
    suit: Suit.barricade,
    value: 8,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 30,
    suit: Suit.barricade,
    value: 9,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 31,
    suit: Suit.barricade,
    value: 10,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 32,
    suit: Suit.barricade,
    value: 11,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 33,
    suit: Suit.barricade,
    value: 12,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 34,
    suit: Suit.barricade,
    value: 13,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 35,
    suit: Suit.lock,
    value: 5,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 36,
    suit: Suit.lock,
    value: 6,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 37,
    suit: Suit.lock,
    value: 7,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 38,
    suit: Suit.lock,
    value: 8,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 39,
    suit: Suit.lock,
    value: 9,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 40,
    suit: Suit.lock,
    value: 10,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 41,
    suit: Suit.lock,
    value: 11,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 42,
    suit: Suit.lock,
    value: 12,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 43,
    suit: Suit.lock,
    value: 13,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 44,
    suit: Suit.key,
    value: 5,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 45,
    suit: Suit.key,
    value: 6,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 46,
    suit: Suit.key,
    value: 7,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 47,
    suit: Suit.key,
    value: 8,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 48,
    suit: Suit.key,
    value: 9,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 49,
    suit: Suit.key,
    value: 10,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 50,
    suit: Suit.key,
    value: 11,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 51,
    suit: Suit.key,
    value: 12,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
  {
    id: 52,
    suit: Suit.key,
    value: 13,
    imageRef:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg',
  },
];
