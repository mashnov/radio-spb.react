const list = [
    {
        name: 'Радио России',
        logo: '/images/stations/russland.jpg',
        frequency: '66.3',
        stream: 'http://icecast.vgtrk.cdnvideo.ru/rrzonam_mp3_192kbps',
        id: 'russland'
    },
    {
        name: 'Радио Маяк',
        logo: '/images/stations/mayak.jpg',
        frequency: '67.4',
        stream: 'https://icecast-vgtrk.cdnvideo.ru/mayakfm_aac_64kbps',
        id: 'mayak'
    },
    {
        name: 'Радио Свобода',
        logo: '/images/stations/svoboda.jpg',
        frequency: '68.0',
        stream: 'http://rfe04.akacast.akamaistream.net/7/509/437762/v1/ibb.akacast.akamaistream.net/rfe04',
        id: 'svoboda'
    },
    {
        name: 'Радио Петербург',
        logo: '/images/stations/peterburg.jpg',
        frequency: '69.4',
        stream: 'https://www.5-tv.ru/radio.mp3',
        id: 'peterburg'
    },
    {
        name: 'Радио орфей',
        logo: '/images/stations/orfey.jpg',
        frequency: '71.6',
        stream: 'https://orfeyfm.hostingradio.ru:8034/orfeyfm128.mp3',
        id: 'orfey'
    },
    {
        name: 'Град Петров',
        logo: '/images/stations/grad-petrov.jpg',
        frequency: '73.1',
        stream: 'http://www.grad-petrov.ru:8093/mp3-40',
        id: 'grad-petrov'
    },
    {
        name: 'Royal Radio',
        logo: '/images/stations/royal.jpg',
        frequency: '81.6',
        stream: 'http://185.39.195.90:8000/royal_live',
        id: 'royal'
    },
    {
        name: 'Дорожное Радио',
        logo: '/images/stations/dorojnoe.jpg',
        frequency: '87.5',
        stream: 'http://dorognoe.hostingradio.ru:8000/dorognoe',
        id: 'dorojnoe'
    },
    {
        name: 'Ретро FM',
        logo: '/images/stations/retro.jpg',
        frequency: '88.0',
        stream: 'http://retroserver.streamr.ru:8043/retro256.mp3',
        id: 'retro'
    },
    {
        name: 'Авторадио',
        logo: '/images/stations/avtoradio.jpg',
        frequency: '88.4',
        stream: 'http://ic7.101.ru:8000/v3_1',
        id: 'avtoradio'
    },
    {
        name: 'Юмор FM',
        logo: '/images/stations/umor.jpg',
        frequency: '88.9',
        stream: 'http://ic7.101.ru:8000/v5_1',
        id: 'umor'
    },
    {
        name: 'Вести FM',
        logo: '/images/stations/vesti.jpg',
        frequency: '89.3',
        stream: 'http://icecast.vgtrk.cdnvideo.ru/vestifm_mp3_192kbps',
        id: 'vesti'
    },
    {
        name: 'Радио Зенит',
        logo: '/images/stations/zenit.jpg',
        frequency: '89.7',
        stream: 'http://ic3.101.ru:8000/v15_1',
        id: 'zenit'
    },
    {
        name: 'Радио Эрмитаж',
        logo: '/images/stations/ermitage.jpg',
        frequency: '90.1',
        stream: 'http://91.190.117.131:8000/live',
        id: 'ermitage'
    },
    {
        name: 'Новое Радио',
        logo: '/images/stations/novoe.jpg',
        frequency: '91.1',
        stream: 'http://icecast.newradio.cdnvideo.ru/newradio3',
        id: 'novoe'
    },
    {
        name: 'Эхо Москвы',
        logo: '/images/stations/eho.jpg',
        frequency: '91.5',
        stream: 'http://ice912.echo.msk.ru:9120/stream',
        id: 'eho'
    },
    {
        name: 'Радио ENERGY',
        logo: '/images/stations/energy.jpg',
        frequency: '95.0',
        stream: 'http://ic3.101.ru:8000/a99',
        id: 'energy'
    },
    {
        name: 'Comedy Radio',
        logo: '/images/stations/comedy.jpg',
        frequency: '95.9',
        stream: 'http://ic6.101.ru:8000/a202',
        id: 'comedy'
    },
    {
        name: 'Радио дача',
        logo: '/images/stations/dacha.jpg',
        frequency: '97.0',
        stream: 'http://ic6.101.ru:8000/a202',
        id: 'dacha'
    },
    {
        name: 'Ностальгия FM',
        logo: '/images/stations/nostalgia.jpg',
        frequency: '98.6',
        stream: 'http://93.189.147.117:8000/nostalgiafm.mp3',
        id: 'nostalgia'
    },
    {
        name: 'Европа Плюс',
        logo: '/images/stations/europa.jpg',
        frequency: '100.5',
        stream: 'http://emgspb.hostingradio.ru/europaplusspb128.mp3',
        id: 'europa'
    },
    {
        name: 'Питер FM',
        logo: '/images/stations/piter.jpg',
        frequency: '100.9',
        stream: 'http://radiocast.muz-lab.ru/VTJT.mp3?6d71',
        id: 'piter'
    },
    {
        name: 'Эльдорадио',
        logo: '/images/stations/eldo.jpg',
        frequency: '101.4',
        stream: 'http://emgspb.hostingradio.ru/eldoradio128.mp3',
        id: 'eldo'
    },
    {
        name: 'Страна FM',
        logo: '/images/stations/strana.jpg',
        frequency: '102.0',
        stream: 'http://icecast.stranafm.cdnvideo.ru/stranafm_128?943a',
        id: 'strana'
    },
    {
        name: 'Радио Максимум',
        logo: '/images/stations/maximum.jpg',
        frequency: '102.8',
        stream: 'https://maximum.hostingradio.ru/maximum96.aacp',
        id: 'maximum'
    },
    {
        name: 'DFM',
        logo: '/images/stations/dfm.jpg',
        frequency: '103.4',
        stream: 'https://dfm.hostingradio.ru/dfm96.aacp',
        id: 'dfm'
    },
    {
        name: 'Детское Радио',
        logo: '/images/stations/detskoe.jpg',
        frequency: '103.7',
        stream: 'http://ic2.101.ru:8000/v14_1',
        id: 'detskoe'
    },
    {
        name: 'Наше радио',
        logo: '/images/stations/nashe.jpg',
        frequency: '104.0',
        stream: 'http://nashe1.hostingradio.ru/nashespb128.mp3',
        id: 'nashe'
    },
    {
        name: 'Радио Шансон',
        logo: '/images/stations/shanson.jpg',
        frequency: '104.4',
        stream: 'http://chanson.hostingradio.ru:8041/chanson128.mp3',
        id: 'shanson'
    },
    {
        name: 'Радио Балтика',
        logo: '/images/stations/baltica.jpg',
        frequency: '104.8',
        stream: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
        id: 'baltica'
    },
    {
        name: 'Love radio',
        logo: '/images/stations/love.jpg',
        frequency: '105.3',
        stream: 'https://air2.volna.top/LoveRadio-MSK',
        id: 'love'
    },
    {
        name: 'Монте-Карло',
        logo: '/images/stations/monte-karlo.jpg',
        frequency: '105.9',
        stream: 'https://montecarlo.hostingradio.ru/montecarlo96.aacp',
        id: 'monte-karlo'
    },
    {
        name: 'Хит FM',
        logo: '/images/stations/hit.jpg',
        frequency: '106.5',
        stream: 'https://hitfm.hostingradio.ru/hitfm96.aacp',
        id: 'hit'
    },
    {
        name: 'Бизнес FM',
        logo: '/images/stations/business.jpg',
        frequency: '107.4',
        stream: 'http://stream.businessfm.spb.ru:8000/live',
        id: 'business'
    },
    {
        name: 'Русское радио',
        logo: '/images/stations/russkoe.jpg',
        frequency: '107.8',
        stream: 'https://rusradio.hostingradio.ru/rusradio96.aacp',
        id: 'russkoe'
    }
];

export default list;
