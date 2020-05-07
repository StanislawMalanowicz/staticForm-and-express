const express = require('express');

const portisheadsRouter = express.Router();

const albums = [
  {
    title: 'Dummy',
    songs: [
      {
        title: 'Mysterons',
        length: '5:02',
      },
      {
        title: 'Sour Times',
        length: '4:11',
      },
      {
        title: 'Strangers',
        length: '3:55',
      },
      {
        title: 'It Could Be Sweet',
        length: '4:16',
      },
      {
        title: 'Wandering Star',
        length: '4:51',
      },
      {
        title: "It's a Fire",
        length: '3:49',
      },
      {
        title: 'Numb',
        length: '3:54',
      },
      {
        title: 'Roads',
        length: '5:02',
      },
      {
        title: 'Pedestal',
        length: '3:39',
      },
      {
        title: 'Biscuit',
        length: '5:01',
      },
      {
        title: 'Glory Box',
        length: '5:06',
      },
    ],
    description:
      '\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      ',
  },
  {
    title: 'Third',
    songs: [
      {
        title: 'Silence',
        length: '4:58',
      },
      {
        title: 'Hunter',
        length: '3:57',
      },
      {
        title: 'Nylon Smile',
        length: '3:16',
      },
      {
        title: 'The Rip',
        length: '4:29',
      },
      {
        title: 'Plastic',
        length: '3:27',
      },
      {
        title: 'We Carry On',
        length: '6:27',
      },
      {
        title: 'Deep Water',
        length: '1:31',
      },
      {
        title: 'Machine Gun',
        length: '4:43',
      },
      {
        title: 'Small',
        length: '6:45',
      },
      {
        title: 'Magic Doors',
        length: '3:32',
      },
      {
        title: 'Threads',
        length: '5:45',
      },
    ],
    description:
      "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      ",
  },
];


function router(dataObj) {
  portisheadsRouter.route('/').get((req, res) => {
    res.render('portishead', dataObj);
  });
  portisheadsRouter.route('/:id').get((req, res) => {
    const { id } = req.params;
    const data = dataObj.albums[1].albums[id];
    res.render('singleAlbum', data);
  });
  return portisheadsRouter;
}

module.exports = router;
