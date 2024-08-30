import { reactive } from 'vue'

export const store = reactive ({
    trip : [
        {
          day: 1,
          date: '2023-08-01',
          stops: [
            {
              name: 'Colosseo',
              description: 'Anfiteatro romano simbolo di Roma antica.',
              date: '2023-08-01',
              images: [
                'https://plus.unsplash.com/premium_photo-1661963952208-2db3512ef3de?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1567242852739-d6f328887b43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              ],
              dishes: ['Pasta Carbonara', 'Gelato'],
              latitude: 41.8902,
              longitude: 12.4922,
              visited: false
            },
            {
              name: 'Fontana di Trevi',
              description: 'Famosa fontana barocca, icona di Roma.',
              date: '2023-08-01',
              images: [
                'https://plus.unsplash.com/premium_photo-1661962915628-cb4f8dddcca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9udGFuYSUyMGRpJTIwdHJldml8ZW58MHx8MHx8fDA%3D',
                'https://images.unsplash.com/photo-1607028693938-e63250910b2d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              ],
              dishes: ['Pizza Margherita', 'Tiramisù'],
              latitude: 41.9009,
              longitude: 12.4833,
              visited: false
            },
            {
              name: 'Pantheon',
              description: 'Tempio romano dedicato a tutti gli dei.',
              date: '2023-08-01',
              images: [
                'https://plus.unsplash.com/premium_photo-1661962912126-2e72429a3f1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1699361233748-83d72473e5c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFudGhlb258ZW58MHx8MHx8fDA%3D'
              ],
              dishes: ['Supplì', 'Espresso'],
              latitude: 41.8986,
              longitude: 12.4769,
              visited: false
            }
          ]
        },
        {
          day: 2,
          date: '2023-08-02',
          stops: [
            {
              name: 'Musei Vaticani',
              description: 'Collezione di arte e storia vaticana.',
              date: '2023-08-02',
              images: [
                'https://images.unsplash.com/photo-1586884542514-f6bef0283446?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://plus.unsplash.com/premium_photo-1694475027178-2884c903e6c0?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              ],
              dishes: ['Spaghetti alla Carbonara', 'Cannoli'],
              latitude: 41.9065,
              longitude: 12.4536,
              visited: false
            },
            {
              name: 'Cappella Sistina',
              description: 'Celebre cappella con affreschi di Michelangelo.',
              date: '2023-08-02',
              images: [
                'https://plus.unsplash.com/premium_photo-1661907848510-1e4fd1e60f35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8',
                'https://images.unsplash.com/photo-1668618055985-c5bbbd1ccb8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              ],
              dishes: ['Bruschette', 'Amatriciana'],
              latitude: 41.9029,
              longitude: 12.4544,
              visited: false
            },
            {
              name: 'Castel Sant\'Angelo',
              description: 'Antico mausoleo e fortezza papale.',
              date: '2023-08-02',
              images: [
                'https://images.unsplash.com/photo-1512064444180-54b51a475aa7?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1557741999-ff7ded52cde5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhc3RlbCUyMHNhbnQnYW5nZWxvfGVufDB8fDB8fHww'
              ],
              dishes: ['Cacio e Pepe', 'Tartufo'],
              latitude: 41.9039,
              longitude: 12.4663,
              visited: false
            }
          ]
        },
        {
          day: 3,
          date: '2023-08-03',
          stops: [
            {
              name: 'Piazza Navona',
              description: 'Piazza storica con fontane e caffè.',
              date: '2023-08-03',
              images: [
                'https://images.unsplash.com/photo-1594403786841-5154392e8ea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGlhenphJTIwTmF2b25hfGVufDB8fDB8fHww',
                'https://plus.unsplash.com/premium_photo-1677340421420-0d1dc9740196?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D'
              ],
              dishes: ['Saltimbocca alla Romana', 'Biscotti'],
              latitude: 41.8989,
              longitude: 12.4731,
              visited: false
            },
            {
              name: 'Campo de\' Fiori',
              description: 'Vivace mercato e piazza storica.',
              date: '2023-08-03',
              images: [
                'https://images.unsplash.com/photo-1705626742223-6c389b2f173f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
                'https://images.unsplash.com/photo-1615413442897-94df061ba08c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBvJTIwZGUlMjBmaW9yaXxlbnwwfHwwfHx8MA%3D%3D'
              ],
              dishes: ['Carciofi alla Giudia', 'Gnocchi'],
              latitude: 41.8959,
              longitude: 12.4721,
              visited: false
            },
            {
              name: 'Trastevere',
              description: 'Quartiere pittoresco con vicoli stretti.',
              date: '2023-08-03',
              images: [
                'https://images.unsplash.com/photo-1708628934823-a37e3fe0bb4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1677623428681-3149246bfa42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRyYXN0ZXZlcmV8ZW58MHx8MHx8fDA%3D'
              ],
              dishes: ['Fiori di Zucca', 'Crostata'],
              latitude: 41.8888,
              longitude: 12.4663,
              visited: false
            }
          ]
        },
        {
          day: 4,
          date: '2023-08-04',
          stops: [
            {
              name: 'Villa Borghese',
              description: 'Grande parco con musei e giardini.',
              date: '2023-08-04',
              images: [
                'https://plus.unsplash.com/premium_photo-1701196955201-c3158c8666b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmlsbGElMjBCb3JnaGVzZXxlbnwwfHwwfHx8MA%3D%3D',
                'https://images.unsplash.com/photo-1610056625644-3dca06bdaff5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VmlsbGElMjBCb3JnaGVzZXxlbnwwfHwwfHx8MA%3D%3D'
              ],
              dishes: ['Prosciutto e Melone', 'Gelato Artigianale'],
              latitude: 41.9142,
              longitude: 12.4923,
              visited: false
            },
            {
              name: 'Piazza di Spagna',
              description: 'Famosa piazza con la Scalinata di Trinità dei Monti.',
              date: '2023-08-04',
              images: [
                'https://images.unsplash.com/photo-1710067834430-4746ec45560e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGlhenphJTIwZGklMjBTcGFnbmF8ZW58MHx8MHx8fDA%3D',
                'https://plus.unsplash.com/premium_photo-1676391702953-f6ef6316eb0a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              ],
              dishes: ['Panzanella', 'Torta Caprese'],
              latitude: 41.9056,
              longitude: 12.4823,
              visited: false
            },
            {
              name: 'Via del Corso',
              description: 'Principale via dello shopping a Roma.',
              date: '2023-08-04',
              images: [
                'https://images.unsplash.com/photo-1563110006-30d5caa58572?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VmlhJTIwZGVsJTIwQ29yc298ZW58MHx8MHx8fDA%3D',
                'https://images.unsplash.com/photo-1568370212880-1c855608b465?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmlhJTIwZGVsJTIwQ29yc298ZW58MHx8MHx8fDA%3D'
              ],
              dishes: ['Supplì', 'Gelato al Limone'],
              latitude: 41.9044,
              longitude: 12.4813,
              visited: false
            }
          ],
          visitedStops: [],
        }
      ]
});