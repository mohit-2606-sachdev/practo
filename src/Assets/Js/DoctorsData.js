const DoctorsData = [
  {
    _id: "652586abb11394cc0fe4895a",
    index: 0,
    isActive: true,
    age: 55,
    name: "Thompson Warner",
    gender: "Male",
    fees: 1267,
    awards:
      "Duis id aliqua adipisicing aliquip adipisicing exercitation culpa.",
    education:
      "Commodo laborum sint incididunt officia ullamco laboris minim ut fugiat cillum et duis eiusmod proident.",
    memberships: "Ad Lorem consectetur nostrud laborum Lorem tempor magna.",
    experience: 4,
    registrations: "Eu officia id nostrud nulla incididunt anim commodo.",
    department: "Gynecologist/Obstetrician",
    location: {
      type: "Point",
      coordinates: [24.523499, 81.2858982],
    },
  },
  {
    _id: "652586ab8be868be9bdc27ba",
    index: 1,
    isActive: true,
    age: 43,
    name: "Addie Benjamin",
    gender: "Male",
    fees: 3868,
    awards: "Aute commodo ex cillum officia eiusmod consectetur ullamco.",
    education: "Mollit adipisicing duis officia do amet qui id.",
    memberships:
      "Veniam nulla esse adipisicing quis laborum eu aliqua dolore eu sunt aliqua dolor anim.",
    experience: 4,
    registrations:
      "Mollit aliqua dolore nostrud officia eiusmod commodo nostrud amet ullamco.",
    department: "Dentist",
    location: {
      type: "Point",
      coordinates: [24.530998, 81.2886994],
    },
  },
  {
    _id: "652586ab864a002f1d888365",
    index: 2,
    isActive: true,
    age: 51,
    name: "Castaneda Herman",
    gender: "Male",
    fees: 3926,
    awards:
      "Eu nostrud aliqua deserunt nisi incididunt pariatur minim qui ea laboris dolor.",
    education: "Et proident commodo veniam consectetur deserunt aliqua dolore.",
    memberships: "Laboris enim magna nulla sunt aliquip culpa magna pariatur.",
    experience: 5,
    registrations: "Cupidatat deserunt officia aute non deserunt.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.526013, 81.2832657],
    },
  },
  {
    _id: "652586ab53d03db7751e3bfa",
    index: 3,
    isActive: true,
    age: 48,
    name: "Jeanie Oneill",
    gender: "Female",
    fees: 3039,
    awards:
      "Eu enim adipisicing duis est consequat aliquip Lorem elit nostrud esse voluptate.",
    education: "Laborum nisi dolor ea ea velit occaecat anim ipsum et.",
    memberships: "Nostrud elit pariatur veniam elit.",
    experience: 5,
    registrations: "Elit deserunt nisi consequat et irure amet irure.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.531542, 81.2798405],
    },
  },
  {
    _id: "652586ab3994a425b8098d6a",
    index: 4,
    isActive: true,
    age: 46,
    name: "Frazier Swanson",
    gender: "Female",
    fees: 1619,
    awards: "Ullamco ex ea cillum nostrud fugiat eu tempor.",
    education:
      "Sint quis elit elit officia enim Lorem labore cillum pariatur tempor occaecat commodo.",
    memberships:
      "Mollit ut reprehenderit sit adipisicing quis Lorem minim elit commodo nulla quis commodo veniam commodo.",
    experience: 10,
    registrations: "Sint irure veniam ullamco ex aliqua amet irure Lorem.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.522494, 81.286944],
    },
  },
  {
    _id: "652586ab7fca33fae150e940",
    index: 5,
    isActive: true,
    age: 49,
    name: "Deana Taylor",
    gender: "Female",
    fees: 2402,
    awards:
      "Quis voluptate cillum reprehenderit velit do cupidatat sit consectetur.",
    education:
      "Consectetur id ipsum consequat elit dolore excepteur sunt duis enim proident est.",
    memberships: "Amet cillum id ipsum id labore esse.",
    experience: 2,
    registrations:
      "Non ea irure voluptate irure incididunt do exercitation ea culpa sint.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.531576, 81.2833532],
    },
  },
  {
    _id: "652586abdc996f401acc0528",
    index: 6,
    isActive: false,
    age: 60,
    name: "Suzette Jones",
    gender: "Male",
    fees: 4743,
    awards: "Labore exercitation nostrud do adipisicing deserunt do ad.",
    education:
      "Do amet esse veniam do laborum qui voluptate deserunt et nostrud.",
    memberships:
      "Consectetur sunt excepteur cillum non nostrud proident nisi nulla.",
    experience: 7,
    registrations:
      "Enim ipsum tempor aliquip quis eiusmod reprehenderit esse dolore aliquip ad anim amet.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.523765, 81.2836562],
    },
  },
  {
    _id: "652586abd3e0eb804ef2adba",
    index: 7,
    isActive: false,
    age: 32,
    name: "Brigitte Black",
    gender: "Female",
    fees: 2198,
    awards:
      "Qui et laborum pariatur ut irure est culpa excepteur reprehenderit culpa quis reprehenderit et enim.",
    education: "Quis sint ut reprehenderit eu culpa do tempor veniam.",
    memberships:
      "Aliqua esse occaecat esse do id laboris occaecat culpa ut qui pariatur consequat reprehenderit.",
    experience: 6,
    registrations:
      "Cupidatat esse id voluptate esse magna irure ea ad eiusmod eiusmod.",
    department: "Gastroenterologist",
    location: {
      type: "Point",
      coordinates: [24.523716, 81.2793455],
    },
  },
  {
    _id: "652586abea536534fd05f1f5",
    index: 8,
    isActive: true,
    age: 36,
    name: "Alvarado Maldonado",
    gender: "Female",
    fees: 4876,
    awards: "Qui sint eiusmod fugiat occaecat amet reprehenderit.",
    education: "Nulla officia deserunt occaecat cupidatat aute culpa.",
    memberships: "Incididunt minim est veniam laboris Lorem et magna.",
    experience: 2,
    registrations:
      "Minim amet pariatur dolore irure aliqua commodo anim anim nostrud consequat.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.527748, 81.2861066],
    },
  },
  {
    _id: "652586abe9e547833c948cbc",
    index: 9,
    isActive: false,
    age: 32,
    name: "Letitia Holloway",
    gender: "Female",
    fees: 1942,
    awards: "Labore incididunt sit mollit et quis.",
    education:
      "Labore nisi exercitation pariatur aliqua id minim proident ea voluptate Lorem ex officia.",
    memberships:
      "Qui id sit mollit aliqua tempor sunt enim nisi sunt ad voluptate velit eu.",
    experience: 10,
    registrations:
      "Veniam aliquip elit dolore est reprehenderit elit labore non ipsum irure fugiat.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.525027, 81.2881152],
    },
  },
  {
    _id: "652586ab98e491d95a377ad0",
    index: 10,
    isActive: true,
    age: 49,
    name: "Mccray Norman",
    gender: "Male",
    fees: 1752,
    awards: "Officia minim nisi adipisicing culpa nisi.",
    education: "Ea irure proident incididunt velit labore elit do elit.",
    memberships:
      "Aute exercitation mollit anim in tempor fugiat culpa deserunt sunt exercitation.",
    experience: 8,
    registrations: "Lorem ea non reprehenderit occaecat amet laboris duis ut.",
    department: "Gastroenterologist",
    location: {
      type: "Point",
      coordinates: [24.526847, 81.2890484],
    },
  },
  {
    _id: "652586abd388f9aa679c9bc8",
    index: 11,
    isActive: false,
    age: 35,
    name: "Claudine Erickson",
    gender: "Female",
    fees: 3048,
    awards: "Commodo aute in reprehenderit labore.",
    education: "Consectetur amet eiusmod culpa amet.",
    memberships:
      "Aliqua cupidatat cupidatat nisi sint non consectetur labore quis anim elit.",
    experience: 6,
    registrations:
      "Irure incididunt ut laboris ex aute non id et minim do ea non consectetur.",
    department: "Gastroenterologist",
    location: {
      type: "Point",
      coordinates: [24.524353, 81.2813072],
    },
  },
  {
    _id: "652586abf2876f5d1f01af1a",
    index: 12,
    isActive: true,
    age: 37,
    name: "Mayra Shelton",
    gender: "Male",
    fees: 3271,
    awards: "Nostrud ad sint nisi voluptate veniam aliqua duis in.",
    education:
      "In minim officia laborum adipisicing sit ad consequat dolore non occaecat mollit.",
    memberships:
      "Velit culpa ut officia qui cupidatat id consectetur consequat dolore et.",
    experience: 9,
    registrations: "Laboris aliqua ullamco irure consequat ipsum deserunt.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.524134, 81.2817625],
    },
  },
  {
    _id: "652586ab9672cc73f95cab04",
    index: 13,
    isActive: false,
    age: 41,
    name: "Obrien Mosley",
    gender: "Female",
    fees: 4118,
    awards:
      "Cillum ad proident laboris occaecat dolore tempor qui sunt exercitation eu consequat occaecat elit.",
    education:
      "Tempor ex adipisicing voluptate reprehenderit velit qui amet sint amet nulla culpa ex eu.",
    memberships:
      "Culpa laborum ipsum est fugiat qui aute ullamco dolor irure officia fugiat fugiat ex aute.",
    experience: 9,
    registrations:
      "Incididunt consectetur cupidatat incididunt culpa Lorem fugiat adipisicing qui.",
    department: "Gastroenterologist",
    location: {
      type: "Point",
      coordinates: [24.521856, 81.2804532],
    },
  },
  {
    _id: "652586aba45a39623a1cba1d",
    index: 14,
    isActive: false,
    age: 47,
    name: "Beverly Moran",
    gender: "Female",
    fees: 3956,
    awards: "Veniam est amet id magna.",
    education: "Proident proident amet aliquip ut minim pariatur occaecat.",
    memberships:
      "Velit sunt magna ea sunt incididunt anim amet sit fugiat consequat aliqua do minim.",
    experience: 10,
    registrations: "Nisi commodo ad pariatur Lorem.",
    department: "Gynecologist/Obstetrician",
    location: {
      type: "Point",
      coordinates: [24.531676, 81.2882624],
    },
  },
  {
    _id: "652586abe01ad8ade560f4ab",
    index: 15,
    isActive: false,
    age: 33,
    name: "Earlene Davenport",
    gender: "Female",
    fees: 1970,
    awards:
      "Incididunt nulla amet veniam mollit excepteur fugiat dolore sunt enim pariatur laboris nisi nostrud deserunt.",
    education:
      "Veniam excepteur qui esse anim velit sit ullamco culpa consectetur.",
    memberships: "Irure labore ad Lorem occaecat ipsum dolor.",
    experience: 9,
    registrations:
      "Dolor et minim esse mollit occaecat eiusmod esse excepteur enim voluptate ex.",
    department: "Gynecologist/Obstetrician",
    location: {
      type: "Point",
      coordinates: [24.528262, 81.2882052],
    },
  },
  {
    _id: "652586aba428dfd53596aca1",
    index: 16,
    isActive: true,
    age: 32,
    name: "Merritt Alford",
    gender: "Female",
    fees: 2205,
    awards:
      "Ex consectetur aliquip cupidatat voluptate sunt excepteur sit id cupidatat est labore voluptate anim.",
    education: "Ut aute veniam ut nisi ad consectetur dolore anim do ad.",
    memberships:
      "Duis adipisicing minim nostrud cupidatat sunt id labore excepteur amet.",
    experience: 9,
    registrations: "Sint elit occaecat deserunt aliqua nulla.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.522035, 81.2835729],
    },
  },
  {
    _id: "652586abb7cb2590cdc94d45",
    index: 17,
    isActive: true,
    age: 39,
    name: "Leona Cantu",
    gender: "Male",
    fees: 4328,
    awards: "Et consectetur ullamco adipisicing consectetur amet voluptate.",
    education:
      "Amet sit excepteur culpa proident ullamco cillum id non mollit labore.",
    memberships:
      "Lorem exercitation do excepteur cupidatat proident nisi irure ea velit.",
    experience: 1,
    registrations: "Amet ex esse proident deserunt.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.528569, 81.2863461],
    },
  },
  {
    _id: "652586aba185ae46b0f05070",
    index: 18,
    isActive: false,
    age: 59,
    name: "Tina Coffey",
    gender: "Male",
    fees: 3837,
    awards:
      "Eiusmod ipsum adipisicing ea incididunt cupidatat aute pariatur ea dolore incididunt eiusmod tempor minim.",
    education:
      "Labore occaecat dolor veniam proident consequat deserunt ullamco exercitation ipsum.",
    memberships: "Minim elit ipsum cillum labore laborum qui.",
    experience: 10,
    registrations:
      "Cupidatat dolore incididunt ea commodo deserunt aliqua velit commodo quis reprehenderit.",
    department: "Orthopedist",
    location: {
      type: "Point",
      coordinates: [24.523809, 81.2836791],
    },
  },
  {
    _id: "652586ab9674011b52feb55b",
    index: 19,
    isActive: false,
    age: 49,
    name: "Georgette Hale",
    gender: "Female",
    fees: 1277,
    awards:
      "Adipisicing in sint quis adipisicing dolore minim irure laboris minim nisi irure.",
    education: "Mollit et duis occaecat non irure dolor.",
    memberships:
      "Aliqua voluptate anim sunt anim consectetur excepteur veniam.",
    experience: 10,
    registrations:
      "Deserunt proident magna sunt mollit fugiat pariatur tempor.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.525483, 81.2808911],
    },
  },
  {
    _id: "652586ab45ba8ef2d3fb1ddb",
    index: 20,
    isActive: false,
    age: 56,
    name: "Marcie Forbes",
    gender: "Female",
    fees: 4285,
    awards:
      "Amet voluptate in amet veniam ea aute irure amet excepteur officia pariatur dolor reprehenderit.",
    education: "Enim Lorem nulla commodo do id et mollit est ad exercitation.",
    memberships: "Sunt nulla cupidatat exercitation cillum proident.",
    experience: 3,
    registrations:
      "Fugiat do enim incididunt non laboris commodo dolore commodo.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.524088, 81.2810428],
    },
  },
  {
    _id: "652586ab996043330f5b48c8",
    index: 21,
    isActive: false,
    age: 53,
    name: "Liza Baird",
    gender: "Female",
    fees: 4916,
    awards: "Ex do Lorem consectetur amet ut dolore ad qui elit.",
    education: "Excepteur et ipsum labore in sint ut.",
    memberships:
      "Ad do tempor qui officia in occaecat in eiusmod ad nisi velit aliqua qui.",
    experience: 3,
    registrations: "Ad cillum deserunt sint laborum elit qui sint dolor.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.526583, 81.2832234],
    },
  },
  {
    _id: "652586ab66dd06a08c0a8dd3",
    index: 22,
    isActive: false,
    age: 43,
    name: "Shanna Burt",
    gender: "Male",
    fees: 3508,
    awards:
      "Minim commodo minim tempor esse ipsum incididunt pariatur adipisicing excepteur ullamco qui.",
    education: "Elit quis ea occaecat mollit non qui consequat ea.",
    memberships: "Ipsum velit duis deserunt ullamco veniam.",
    experience: 7,
    registrations:
      "Quis nulla in pariatur magna proident nisi esse deserunt eiusmod cupidatat excepteur est amet.",
    department: "General physician",
    location: {
      type: "Point",
      coordinates: [24.524145, 81.2830889],
    },
  },
  {
    _id: "652586ab16f5d720359598f6",
    index: 23,
    isActive: true,
    age: 37,
    name: "Lacey Francis",
    gender: "Male",
    fees: 3349,
    awards:
      "Consequat dolore quis incididunt in occaecat velit voluptate veniam.",
    education:
      "Anim sint laboris amet Lorem ullamco tempor laborum eu dolore fugiat.",
    memberships:
      "Non sit ullamco ipsum veniam fugiat Lorem pariatur eu quis ea adipisicing.",
    experience: 1,
    registrations:
      "Ipsum esse amet laboris est culpa nostrud incididunt tempor quis Lorem velit aute do nulla.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.531149, 81.2879213],
    },
  },
  {
    _id: "652586ab15058e4f36d18a11",
    index: 24,
    isActive: false,
    age: 46,
    name: "Rachel Ratliff",
    gender: "Female",
    fees: 4473,
    awards: "Lorem fugiat id ipsum nostrud cillum.",
    education:
      "Cupidatat ex ut incididunt incididunt excepteur esse ea magna irure minim cillum anim quis nisi.",
    memberships: "Anim aute aute tempor tempor est non Lorem.",
    experience: 9,
    registrations:
      "Cupidatat est nisi laboris ut occaecat excepteur mollit minim incididunt deserunt laborum laborum Lorem tempor.",
    department: "Dentist",
    location: {
      type: "Point",
      coordinates: [24.527149, 81.2812193],
    },
  },
  {
    _id: "652586ab62c896b0420596d0",
    index: 25,
    isActive: true,
    age: 53,
    name: "Janette Pennington",
    gender: "Male",
    fees: 3262,
    awards:
      "Nostrud exercitation veniam reprehenderit voluptate qui aliqua eiusmod occaecat duis ullamco.",
    education: "Est occaecat minim nisi quis exercitation est sunt.",
    memberships:
      "Est ad eiusmod ipsum officia aliqua sit ex sint amet ad anim.",
    experience: 2,
    registrations:
      "Fugiat in adipisicing in ipsum enim irure tempor aliqua sunt magna non incididunt enim in.",
    department: "Dentist",
    location: {
      type: "Point",
      coordinates: [24.522172, 81.2869067],
    },
  },
  {
    _id: "652586abe31e40c68e5a1967",
    index: 26,
    isActive: true,
    age: 53,
    name: "Carmela Robertson",
    gender: "Male",
    fees: 2147,
    awards: "Esse amet eiusmod culpa est esse nisi nisi proident esse in.",
    education:
      "Lorem ullamco eiusmod ut nostrud elit fugiat velit aliqua et amet tempor cillum.",
    memberships:
      "Consequat consectetur voluptate nostrud tempor irure mollit culpa ut eiusmod commodo id adipisicing magna anim.",
    experience: 7,
    registrations:
      "Aliqua duis qui esse veniam labore quis nisi duis occaecat enim irure consequat exercitation.",
    department: "Gastroenterologist",
    location: {
      type: "Point",
      coordinates: [24.523962, 81.2810136],
    },
  },
  {
    _id: "652586abd01c0e02b841fefc",
    index: 27,
    isActive: true,
    age: 38,
    name: "Carmen Nunez",
    gender: "Male",
    fees: 4307,
    awards:
      "Excepteur consectetur sunt pariatur sunt officia reprehenderit dolor est tempor sint consequat labore.",
    education:
      "Eiusmod in elit laborum in irure excepteur culpa ullamco aliqua ut.",
    memberships:
      "Labore esse est duis anim tempor in deserunt est sit tempor nisi.",
    experience: 6,
    registrations:
      "Aliqua et aliqua consectetur eiusmod excepteur ea cillum deserunt incididunt.",
    department: "Gastroenterologist",
    location: {
      type: "Point",
      coordinates: [24.523191, 81.2808155],
    },
  },
  {
    _id: "652586ab23d0938d6e984243",
    index: 28,
    isActive: true,
    age: 34,
    name: "Tabitha Freeman",
    gender: "Female",
    fees: 3400,
    awards: "Fugiat nostrud eiusmod dolore ullamco.",
    education:
      "Ipsum nisi sint ut est excepteur duis do ad cillum proident amet et.",
    memberships:
      "Voluptate ullamco deserunt et sunt deserunt incididunt laboris nisi dolore tempor ea.",
    experience: 8,
    registrations: "Sunt velit dolor consequat proident.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.525651, 81.2802786],
    },
  },
  {
    _id: "652586abc88b8f8aa69a4729",
    index: 29,
    isActive: false,
    age: 56,
    name: "Blackwell Gonzalez",
    gender: "Female",
    fees: 3928,
    awards:
      "Nulla excepteur ut velit commodo do enim sit laborum proident ipsum excepteur.",
    education: "Voluptate occaecat Lorem eu aliquip incididunt.",
    memberships: "Esse sint anim veniam ex exercitation.",
    experience: 6,
    registrations:
      "Id sint sit consequat do et laboris do aliquip enim proident mollit.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.52578, 81.2842547],
    },
  },
  {
    _id: "652586ab1b814e0805a44ef8",
    index: 30,
    isActive: false,
    age: 59,
    name: "Hoover Dorsey",
    gender: "Female",
    fees: 4940,
    awards:
      "Ea tempor dolore elit mollit velit aliqua ad occaecat mollit irure.",
    education: "Et commodo cillum anim do duis minim aliquip nulla.",
    memberships:
      "Commodo quis Lorem aliquip cillum non dolore proident et laborum cillum occaecat.",
    experience: 8,
    registrations:
      "Occaecat sit in Lorem in non officia aliqua sunt officia deserunt irure.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.523533, 81.2862041],
    },
  },
  {
    _id: "652586abb0e5b7db73dab4cc",
    index: 31,
    isActive: false,
    age: 30,
    name: "Hall Campos",
    gender: "Male",
    fees: 4939,
    awards: "Consequat aliquip sint ullamco laboris ea.",
    education:
      "Eiusmod reprehenderit fugiat amet sint dolor enim aute ad fugiat adipisicing non proident cillum.",
    memberships: "Cupidatat est pariatur minim officia deserunt.",
    experience: 10,
    registrations:
      "Ad anim Lorem tempor aliqua voluptate sint do magna velit cupidatat laboris proident proident.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.524756, 81.283793],
    },
  },
  {
    _id: "652586ab6aa005b2a1232180",
    index: 32,
    isActive: true,
    age: 49,
    name: "Johnnie Vazquez",
    gender: "Male",
    fees: 4722,
    awards:
      "Anim velit do excepteur culpa exercitation dolor eu tempor quis aute occaecat aute eiusmod pariatur.",
    education:
      "In proident culpa excepteur anim consequat fugiat aliqua consectetur nisi dolor.",
    memberships:
      "Id non quis minim mollit non incididunt in incididunt nulla duis voluptate cillum.",
    experience: 5,
    registrations: "Non minim eiusmod cillum aliqua labore nisi mollit.",
    department: "General physician",
    location: {
      type: "Point",
      coordinates: [24.528059, 81.2857486],
    },
  },
  {
    _id: "652586abd3cec275697283ff",
    index: 33,
    isActive: true,
    age: 41,
    name: "Roach Spencer",
    gender: "Female",
    fees: 4977,
    awards:
      "Incididunt exercitation occaecat ipsum tempor cupidatat laborum ipsum pariatur nostrud.",
    education: "Amet exercitation nisi mollit nulla nisi cillum.",
    memberships:
      "Exercitation veniam cupidatat ipsum incididunt enim qui occaecat dolore irure exercitation fugiat.",
    experience: 5,
    registrations:
      "Lorem enim culpa esse ea consectetur esse occaecat aliqua reprehenderit adipisicing id.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.531243, 81.2814991],
    },
  },
  {
    _id: "652586abe6ead41ba63af720",
    index: 34,
    isActive: false,
    age: 50,
    name: "Jerry Rodriguez",
    gender: "Female",
    fees: 2376,
    awards: "Cillum deserunt sint anim aute est.",
    education: "Nisi cupidatat reprehenderit et do ut deserunt ad Lorem.",
    memberships:
      "Minim anim elit et Lorem quis exercitation velit sunt sunt ea pariatur pariatur.",
    experience: 6,
    registrations:
      "Irure aliquip deserunt ea aute Lorem cupidatat irure laborum adipisicing excepteur duis nostrud anim eu.",
    department: "Gynecologist/Obstetrician",
    location: {
      type: "Point",
      coordinates: [24.525877, 81.2863388],
    },
  },
  {
    _id: "652586ab1014d0dfb78ac426",
    index: 35,
    isActive: true,
    age: 42,
    name: "Gardner Elliott",
    gender: "Male",
    fees: 4911,
    awards: "Labore elit officia eiusmod velit cillum.",
    education: "Quis eiusmod proident nostrud do consectetur amet.",
    memberships:
      "Consectetur enim nulla elit eu Lorem proident reprehenderit duis sint anim anim sunt.",
    experience: 10,
    registrations:
      "Irure magna amet eiusmod veniam sunt cupidatat esse Lorem mollit officia do ea.",
    department: "General physician",
    location: {
      type: "Point",
      coordinates: [24.526674, 81.2808367],
    },
  },
  {
    _id: "652586ab2c969f2ee60b8c87",
    index: 36,
    isActive: true,
    age: 53,
    name: "Jenkins Bonner",
    gender: "Male",
    fees: 2330,
    awards:
      "Esse commodo labore adipisicing irure est laboris sit occaecat non ullamco sint labore.",
    education: "Esse dolore dolor mollit ipsum.",
    memberships: "Duis esse officia veniam duis ex sunt ex sit.",
    experience: 10,
    registrations: "Cupidatat aute sint velit deserunt in duis et pariatur.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.522147, 81.2868927],
    },
  },
  {
    _id: "652586ab9421bbfcec111d88",
    index: 37,
    isActive: false,
    age: 55,
    name: "Hopkins Huffman",
    gender: "Male",
    fees: 2028,
    awards:
      "Eiusmod culpa velit sunt excepteur aliqua Lorem ea qui dolore dolore Lorem sint.",
    education:
      "Laboris quis ipsum pariatur laboris pariatur ut magna adipisicing quis laborum.",
    memberships:
      "Minim officia voluptate pariatur ipsum velit amet aute ullamco magna.",
    experience: 9,
    registrations:
      "Commodo ex voluptate velit aliquip proident reprehenderit culpa fugiat nostrud est consequat minim fugiat.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.523602, 81.281012],
    },
  },
  {
    _id: "652586ab0f6f0496464336e2",
    index: 38,
    isActive: true,
    age: 45,
    name: "Cara Joseph",
    gender: "Female",
    fees: 3718,
    awards: "Minim sunt esse aute esse sint officia ea.",
    education:
      "Qui anim id ad ipsum consectetur labore occaecat dolore occaecat nisi esse.",
    memberships: "Sint commodo ipsum elit aliquip.",
    experience: 10,
    registrations: "Magna nostrud proident officia deserunt.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.521903, 81.2838542],
    },
  },
  {
    _id: "652586ab109cf760bf226d71",
    index: 39,
    isActive: true,
    age: 44,
    name: "Bullock Wheeler",
    gender: "Male",
    fees: 3568,
    awards:
      "Nisi tempor incididunt officia eiusmod id veniam anim deserunt laborum culpa.",
    education:
      "Dolor voluptate non officia incididunt mollit proident eiusmod consectetur et ea est.",
    memberships:
      "Cupidatat sit adipisicing consequat et velit qui reprehenderit culpa dolore deserunt.",
    experience: 4,
    registrations: "Ea velit incididunt nisi duis officia dolor dolor.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.529381, 81.2839525],
    },
  },
  {
    _id: "652586ab9a6f15e84ce1f895",
    index: 40,
    isActive: false,
    age: 38,
    name: "Jeanne Gates",
    gender: "Male",
    fees: 3818,
    awards: "Ea aute qui aliquip nisi anim consectetur id.",
    education:
      "Ad ea dolore ea culpa reprehenderit consectetur nulla magna aliquip.",
    memberships: "Consequat enim esse proident non anim occaecat ea ex.",
    experience: 10,
    registrations:
      "Elit velit duis eiusmod ipsum dolor minim do do nulla velit duis proident.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.523522, 81.2857514],
    },
  },
  {
    _id: "652586abb0b684bd89a3fd47",
    index: 41,
    isActive: true,
    age: 53,
    name: "Coleman Luna",
    gender: "Female",
    fees: 1606,
    awards: "Voluptate et Lorem id ipsum.",
    education: "Laborum reprehenderit amet cillum adipisicing labore.",
    memberships:
      "Sint aliqua et commodo velit incididunt esse quis sit laborum esse ex et.",
    experience: 4,
    registrations: "Tempor est nisi sit incididunt enim incididunt voluptate.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.522723, 81.2845363],
    },
  },
  {
    _id: "652586ab410e31d99fb4ce4b",
    index: 42,
    isActive: false,
    age: 56,
    name: "Terra Hodge",
    gender: "Male",
    fees: 2364,
    awards:
      "Incididunt excepteur excepteur sunt dolore dolore deserunt quis nostrud ullamco Lorem dolor fugiat.",
    education:
      "Deserunt commodo consequat ad ut pariatur ut cillum reprehenderit officia.",
    memberships: "Commodo labore duis dolore esse ut officia mollit id sunt.",
    experience: 9,
    registrations:
      "Nostrud magna qui et id enim est veniam consequat aliquip ipsum occaecat fugiat minim commodo.",
    department: "Orthopedist",
    location: {
      type: "Point",
      coordinates: [24.530822, 81.2810586],
    },
  },
  {
    _id: "652586ab724d389035c5c7c3",
    index: 43,
    isActive: true,
    age: 44,
    name: "Laura Allen",
    gender: "Male",
    fees: 4737,
    awards:
      "Laboris duis et exercitation incididunt ea eiusmod proident laboris esse anim esse reprehenderit ad esse.",
    education:
      "Laboris minim irure elit sunt exercitation Lorem elit voluptate.",
    memberships: "Eiusmod sint duis laboris quis sint ad id.",
    experience: 7,
    registrations:
      "Nostrud qui exercitation do ut irure amet exercitation ad sit.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.526934, 81.2868235],
    },
  },
  {
    _id: "652586ab4cbaa5e3a54739c4",
    index: 44,
    isActive: true,
    age: 44,
    name: "Michele Delacruz",
    gender: "Male",
    fees: 3653,
    awards:
      "Enim voluptate Lorem proident deserunt eiusmod nisi laboris consectetur laborum.",
    education: "Veniam anim est id cillum cupidatat labore commodo.",
    memberships:
      "Pariatur est est in sit irure elit ut reprehenderit eiusmod aliquip cupidatat.",
    experience: 5,
    registrations: "Est et ut aliquip duis tempor.",
    department: "Orthopedist",
    location: {
      type: "Point",
      coordinates: [24.528146, 81.28226],
    },
  },
  {
    _id: "652586ab6ce945bcd6bc91b5",
    index: 45,
    isActive: true,
    age: 55,
    name: "Wilson Travis",
    gender: "Male",
    fees: 4475,
    awards:
      "Culpa nulla ad amet do do minim ex id cillum cillum pariatur nostrud ex adipisicing.",
    education:
      "Esse magna esse consectetur ipsum anim aliqua do dolor sint pariatur qui ad veniam.",
    memberships: "Deserunt pariatur mollit amet pariatur labore excepteur sit.",
    experience: 1,
    registrations:
      "Consequat deserunt sit tempor commodo minim do sit commodo proident nulla officia in labore.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.525858, 81.286655],
    },
  },
  {
    _id: "652586abb8ab62c414c2b505",
    index: 46,
    isActive: true,
    age: 34,
    name: "Carr Donaldson",
    gender: "Female",
    fees: 3212,
    awards:
      "Pariatur aute excepteur enim adipisicing deserunt officia sint qui.",
    education:
      "Veniam cupidatat amet dolor excepteur ullamco occaecat Lorem cupidatat nulla veniam.",
    memberships:
      "Anim laborum ut tempor aute incididunt ex incididunt nisi voluptate consectetur nostrud velit.",
    experience: 4,
    registrations:
      "Sint ullamco ullamco fugiat excepteur aliqua commodo ad deserunt ut enim cupidatat adipisicing in.",
    department: "General physician",
    location: {
      type: "Point",
      coordinates: [24.531032, 81.2873792],
    },
  },
  {
    _id: "652586ab6197b94237372daf",
    index: 47,
    isActive: true,
    age: 60,
    name: "Caitlin Nicholson",
    gender: "Female",
    fees: 1398,
    awards:
      "Anim consectetur proident occaecat minim in laboris ullamco dolor consectetur et ea.",
    education:
      "Excepteur consequat deserunt do ex officia voluptate sit cupidatat dolore ex anim dolore.",
    memberships:
      "Labore ullamco irure deserunt pariatur velit anim id eiusmod ad reprehenderit consequat.",
    experience: 1,
    registrations: "Nisi nulla aliquip ut qui quis eu minim elit deserunt.",
    department: "Gynecologist/Obstetrician",
    location: {
      type: "Point",
      coordinates: [24.529973, 81.2850657],
    },
  },
  {
    _id: "652586ab4adc8718d735071f",
    index: 48,
    isActive: false,
    age: 51,
    name: "Sandy Hunt",
    gender: "Male",
    fees: 2106,
    awards:
      "Do duis excepteur incididunt elit adipisicing consectetur non dolor laborum laborum dolor in.",
    education:
      "Anim commodo labore aliqua deserunt exercitation cillum magna aute.",
    memberships:
      "Deserunt anim velit labore incididunt officia eu non ipsum aliquip exercitation sunt occaecat anim deserunt.",
    experience: 6,
    registrations:
      "Consequat et eu esse est labore quis consectetur aliquip laboris pariatur.",
    department: "Orthopedist",
    location: {
      type: "Point",
      coordinates: [24.525715, 81.2844944],
    },
  },
  {
    _id: "652586ab2028353952971edb",
    index: 49,
    isActive: false,
    age: 36,
    name: "Newton Nielsen",
    gender: "Male",
    fees: 2683,
    awards:
      "Enim exercitation in voluptate anim nostrud amet aliqua cupidatat ad ex.",
    education: "Adipisicing eiusmod culpa enim ullamco ad elit.",
    memberships:
      "Fugiat irure proident dolore culpa laborum consequat consequat culpa non ut pariatur deserunt deserunt.",
    experience: 2,
    registrations: "Ut amet aliqua labore sint aliqua voluptate qui et nulla.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.522774, 81.2878943],
    },
  },
  {
    _id: "652586ab76ed0637ef4eec93",
    index: 50,
    isActive: false,
    age: 30,
    name: "Nona Michael",
    gender: "Female",
    fees: 4397,
    awards:
      "Voluptate amet fugiat nulla sunt pariatur minim excepteur in ipsum ea tempor ut.",
    education: "Commodo officia in ad minim dolore ea est cupidatat esse.",
    memberships:
      "Eu id sunt aute fugiat do dolore dolore non et Lorem consequat veniam.",
    experience: 10,
    registrations: "Voluptate id dolor ea aute fugiat deserunt.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.528616, 81.2867172],
    },
  },
  {
    _id: "652586aba20bc8bc75e9982b",
    index: 51,
    isActive: true,
    age: 37,
    name: "Owens Holland",
    gender: "Female",
    fees: 2520,
    awards:
      "Nulla do anim irure proident enim nulla mollit incididunt dolor veniam Lorem mollit.",
    education: "Veniam nisi eiusmod ut amet.",
    memberships: "Elit labore velit ut elit excepteur dolor ut mollit.",
    experience: 9,
    registrations: "Duis ex et ipsum irure magna elit voluptate Lorem.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.522319, 81.2839141],
    },
  },
  {
    _id: "652586ab60396ed4b6446cca",
    index: 52,
    isActive: false,
    age: 39,
    name: "Mckee Sloan",
    gender: "Female",
    fees: 4006,
    awards:
      "In ad culpa magna esse aliqua ad consequat velit voluptate excepteur nostrud ullamco cillum magna.",
    education:
      "Esse pariatur commodo aute nostrud veniam incididunt laborum ut voluptate consequat dolore cillum occaecat laborum.",
    memberships:
      "Qui mollit veniam consectetur pariatur laborum nostrud nisi proident anim do.",
    experience: 2,
    registrations:
      "Deserunt reprehenderit ullamco elit esse sit eiusmod duis eu.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.53028, 81.2828294],
    },
  },
  {
    _id: "652586ab4c05d386e8ae0510",
    index: 53,
    isActive: false,
    age: 31,
    name: "Charles Bird",
    gender: "Female",
    fees: 4931,
    awards: "Nisi elit tempor ut adipisicing ullamco irure.",
    education: "Nulla labore mollit quis nisi occaecat enim est.",
    memberships:
      "Laborum adipisicing exercitation tempor sit labore in tempor commodo non aliquip commodo.",
    experience: 10,
    registrations:
      "Et enim incididunt mollit ex nostrud in id laborum cillum et.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.530168, 81.2825744],
    },
  },
  {
    _id: "652586ab65722ce0eed043a1",
    index: 54,
    isActive: false,
    age: 51,
    name: "Bartlett Hendrix",
    gender: "Male",
    fees: 1569,
    awards: "Exercitation tempor cillum sit nisi adipisicing consequat minim.",
    education: "Culpa exercitation sunt in aute laboris.",
    memberships:
      "Aliquip nostrud proident nostrud non fugiat nulla ea anim do commodo.",
    experience: 2,
    registrations: "Cillum sit qui tempor ullamco.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.527602, 81.2865981],
    },
  },
  {
    _id: "652586aba422dd66a7d6dca6",
    index: 55,
    isActive: false,
    age: 48,
    name: "Lorrie Scott",
    gender: "Female",
    fees: 3800,
    awards: "Anim quis non exercitation nulla officia laboris officia magna.",
    education:
      "Quis ad Lorem exercitation exercitation id enim irure velit quis.",
    memberships:
      "Aliqua laboris officia duis nisi consectetur deserunt exercitation incididunt veniam sunt.",
    experience: 7,
    registrations: "Labore ullamco ullamco pariatur consequat dolore ad.",
    department: "Gastroenterologist",
    location: {
      type: "Point",
      coordinates: [24.5284, 81.2805238],
    },
  },
  {
    _id: "652586ab2a87883c9cde76c6",
    index: 56,
    isActive: true,
    age: 52,
    name: "Luna Barr",
    gender: "Female",
    fees: 3483,
    awards: "Nisi anim duis incididunt reprehenderit.",
    education: "Lorem quis dolor eu quis sunt elit.",
    memberships: "Sunt sunt adipisicing nulla non.",
    experience: 10,
    registrations: "Labore in labore sint ex reprehenderit duis minim anim.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.530298, 81.2799678],
    },
  },
  {
    _id: "652586abcf8f0ce66f282329",
    index: 57,
    isActive: true,
    age: 44,
    name: "Daniels Klein",
    gender: "Female",
    fees: 3125,
    awards: "Ea cupidatat aute eiusmod reprehenderit.",
    education: "Aute cillum enim pariatur in.",
    memberships:
      "Esse et sunt aute pariatur Lorem aliqua deserunt proident minim incididunt magna eiusmod pariatur.",
    experience: 3,
    registrations:
      "Incididunt ea incididunt officia labore minim consequat do sunt reprehenderit eiusmod adipisicing excepteur.",
    department: "Dentist",
    location: {
      type: "Point",
      coordinates: [24.530593, 81.2829173],
    },
  },
  {
    _id: "652586ab0a3b2340a06f8389",
    index: 58,
    isActive: true,
    age: 37,
    name: "Bright Farmer",
    gender: "Female",
    fees: 5000,
    awards: "Aliqua id voluptate esse nulla deserunt ea velit mollit.",
    education: "Eiusmod ipsum laborum nisi in laborum Lorem.",
    memberships:
      "Ut minim nisi culpa commodo Lorem deserunt amet occaecat velit dolor nostrud.",
    experience: 10,
    registrations:
      "Pariatur veniam culpa dolore ullamco laboris eiusmod ut Lorem.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.528302, 81.2863331],
    },
  },
  {
    _id: "652586ab8a5e469b47b7066a",
    index: 59,
    isActive: false,
    age: 30,
    name: "Collins Melton",
    gender: "Female",
    fees: 4084,
    awards: "Ullamco cillum proident consequat laboris nostrud.",
    education:
      "Pariatur tempor velit Lorem ipsum exercitation id irure irure ipsum commodo.",
    memberships: "Velit fugiat laboris officia duis esse ipsum.",
    experience: 5,
    registrations:
      "Consequat laboris consectetur sunt amet laboris incididunt ut esse officia anim aute enim ea.",
    department: "Orthopedist",
    location: {
      type: "Point",
      coordinates: [24.531105, 81.2801101],
    },
  },
  {
    _id: "652586ab45565759066600ea",
    index: 60,
    isActive: false,
    age: 30,
    name: "Tonya Russo",
    gender: "Male",
    fees: 1330,
    awards:
      "In exercitation occaecat proident Lorem sunt pariatur et occaecat aliqua aliqua commodo esse dolor.",
    education: "Ullamco nulla voluptate cupidatat veniam duis cillum.",
    memberships:
      "Pariatur deserunt incididunt ipsum fugiat ad nisi et exercitation laborum qui fugiat.",
    experience: 8,
    registrations: "Aliquip ex commodo aliqua veniam exercitation.",
    department: "Gynecologist/Obstetrician",
    location: {
      type: "Point",
      coordinates: [24.529166, 81.2864896],
    },
  },
  {
    _id: "652586aba7db33768efa38fd",
    index: 61,
    isActive: false,
    age: 41,
    name: "Alice Sykes",
    gender: "Male",
    fees: 2736,
    awards:
      "Deserunt deserunt incididunt enim commodo incididunt Lorem nisi pariatur laboris irure anim Lorem incididunt cillum.",
    education: "Deserunt ex elit anim sit est mollit voluptate dolor.",
    memberships: "Et ea et culpa sunt.",
    experience: 4,
    registrations:
      "Et deserunt do eu irure aliqua labore aute consectetur esse do duis ipsum.",
    department: "Dentist",
    location: {
      type: "Point",
      coordinates: [24.524434, 81.2799804],
    },
  },
  {
    _id: "652586ab7c795f27d83e25da",
    index: 62,
    isActive: true,
    age: 49,
    name: "Carney Kirkland",
    gender: "Female",
    fees: 2157,
    awards: "Ad dolore ea mollit sit cillum est.",
    education:
      "Labore in labore voluptate duis labore exercitation ullamco proident nisi Lorem quis esse.",
    memberships: "Sunt sit eiusmod consectetur amet commodo veniam magna.",
    experience: 9,
    registrations:
      "Culpa anim minim magna proident amet deserunt ut qui nulla nulla excepteur esse velit.",
    department: "Dentist",
    location: {
      type: "Point",
      coordinates: [24.529705, 81.284857],
    },
  },
  {
    _id: "652586abbc8efda32294496e",
    index: 63,
    isActive: false,
    age: 51,
    name: "Leblanc Ellison",
    gender: "Male",
    fees: 3274,
    awards:
      "Officia ipsum consectetur reprehenderit sunt nostrud in et magna aliqua quis consequat.",
    education: "Non ad in aute amet mollit occaecat eiusmod aliqua.",
    memberships:
      "Occaecat sit duis tempor aliquip consequat nostrud aliquip excepteur elit aliquip officia dolore sint nostrud.",
    experience: 3,
    registrations: "Et labore commodo cillum voluptate ipsum do eu.",
    department: "Orthopedist",
    location: {
      type: "Point",
      coordinates: [24.530655, 81.2868328],
    },
  },
  {
    _id: "652586ab6d5b00834fe11492",
    index: 64,
    isActive: false,
    age: 50,
    name: "Pratt Flynn",
    gender: "Male",
    fees: 2901,
    awards:
      "Eiusmod labore sint dolore cillum amet sit minim consequat eu esse irure.",
    education:
      "Culpa eu dolor quis voluptate est duis aliquip mollit eiusmod proident magna amet Lorem.",
    memberships: "Ad id elit veniam est ea sit aliquip fugiat ad duis.",
    experience: 4,
    registrations: "Elit commodo consequat laborum culpa anim tempor.",
    department: "Orthopedist",
    location: {
      type: "Point",
      coordinates: [24.524646, 81.2807688],
    },
  },
  {
    _id: "652586abbd6053576927b84a",
    index: 65,
    isActive: false,
    age: 37,
    name: "Frank Todd",
    gender: "Male",
    fees: 1941,
    awards: "Qui consectetur ipsum culpa sunt eu ex.",
    education:
      "Quis do nisi velit cillum tempor sunt exercitation ullamco commodo Lorem culpa id.",
    memberships: "Commodo quis ad anim fugiat nisi minim elit veniam deserunt.",
    experience: 10,
    registrations: "Voluptate officia et ipsum sit pariatur voluptate ex sunt.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.522182, 81.2847062],
    },
  },
  {
    _id: "652586ab8af38b595b432e52",
    index: 66,
    isActive: true,
    age: 32,
    name: "Berger Hoover",
    gender: "Male",
    fees: 1150,
    awards:
      "Est laborum aliqua sint eu labore reprehenderit sit fugiat deserunt eiusmod.",
    education:
      "Ullamco Lorem adipisicing cillum veniam enim velit proident anim aliquip labore.",
    memberships: "Laborum sint aliquip qui pariatur ipsum sit officia.",
    experience: 4,
    registrations: "Sint officia duis duis non.",
    department: "General physician",
    location: {
      type: "Point",
      coordinates: [24.52592, 81.2821014],
    },
  },
  {
    _id: "652586abeb3c1b80b32754f4",
    index: 67,
    isActive: true,
    age: 35,
    name: "Maxwell Peterson",
    gender: "Female",
    fees: 2567,
    awards:
      "Culpa consectetur ipsum nulla cillum commodo labore ullamco laboris excepteur ipsum ullamco.",
    education:
      "Occaecat voluptate tempor id sint voluptate magna aliquip esse proident nisi ex id.",
    memberships: "Veniam excepteur excepteur ad amet et irure.",
    experience: 6,
    registrations: "Amet et laboris eu et voluptate magna dolor amet duis.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.527126, 81.2838198],
    },
  },
  {
    _id: "652586ab8cf130ec5851e1ad",
    index: 68,
    isActive: true,
    age: 32,
    name: "Therese Branch",
    gender: "Male",
    fees: 4160,
    awards:
      "Laborum exercitation est et quis quis labore consectetur consectetur.",
    education:
      "Officia dolor eiusmod elit cillum pariatur eiusmod ipsum nulla pariatur laborum excepteur eu reprehenderit dolore.",
    memberships:
      "Sit velit mollit pariatur aliquip irure veniam ut excepteur nisi irure reprehenderit minim voluptate.",
    experience: 1,
    registrations: "Laborum culpa occaecat Lorem veniam in.",
    department: "Dentist",
    location: {
      type: "Point",
      coordinates: [24.530849, 81.2892789],
    },
  },
  {
    _id: "652586abb96eb7cf15f66f0f",
    index: 69,
    isActive: false,
    age: 57,
    name: "Bowers Newton",
    gender: "Female",
    fees: 3763,
    awards: "Adipisicing mollit ad id ut dolor ad.",
    education:
      "Consectetur voluptate sint nisi consectetur consectetur nisi officia deserunt et commodo amet enim dolor.",
    memberships:
      "Velit esse elit mollit non duis esse ad fugiat est culpa adipisicing eiusmod.",
    experience: 10,
    registrations: "Ex velit nisi laboris aliquip commodo aliqua.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.524417, 81.2814253],
    },
  },
  {
    _id: "652586abd561f503eaec788f",
    index: 70,
    isActive: false,
    age: 59,
    name: "Stanton Perry",
    gender: "Male",
    fees: 2809,
    awards:
      "Culpa sit enim sit ullamco magna Lorem exercitation exercitation voluptate.",
    education:
      "Cillum proident Lorem amet quis nisi ea exercitation adipisicing Lorem pariatur minim consequat.",
    memberships: "Ea nisi nostrud id sint nisi.",
    experience: 4,
    registrations: "Aliqua nostrud sunt voluptate anim.",
    department: "Gastroenterologist",
    location: {
      type: "Point",
      coordinates: [24.524413, 81.2885633],
    },
  },
  {
    _id: "652586abf3024e7aa2825feb",
    index: 71,
    isActive: false,
    age: 46,
    name: "Melissa Sutton",
    gender: "Male",
    fees: 1202,
    awards:
      "Cupidatat ipsum irure nulla Lorem officia eiusmod non et anim consectetur nulla ipsum consequat.",
    education:
      "Veniam proident tempor voluptate eu enim quis qui aliquip anim quis.",
    memberships: "Adipisicing nulla et nulla veniam pariatur magna qui minim.",
    experience: 4,
    registrations: "Ullamco ea in labore qui pariatur qui.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.525004, 81.2860014],
    },
  },
  {
    _id: "652586ab1cf7def171782c84",
    index: 72,
    isActive: false,
    age: 35,
    name: "Guy Odom",
    gender: "Male",
    fees: 1562,
    awards: "Sunt sint occaecat id eu.",
    education:
      "Consectetur enim sunt consectetur laboris consectetur excepteur eu.",
    memberships: "Dolore culpa irure cupidatat qui.",
    experience: 6,
    registrations:
      "Nulla labore nulla in culpa incididunt sit amet aliquip id culpa in.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.522386, 81.2809248],
    },
  },
  {
    _id: "652586ab06f85144d0e973a0",
    index: 73,
    isActive: true,
    age: 41,
    name: "Schmidt Warren",
    gender: "Female",
    fees: 4677,
    awards:
      "Aliqua ex minim cupidatat commodo labore tempor duis exercitation.",
    education: "Ipsum voluptate sunt esse anim sunt.",
    memberships:
      "Ipsum occaecat sit ad fugiat tempor ex magna pariatur aliquip esse dolor irure ad.",
    experience: 6,
    registrations: "Velit minim aliqua duis sunt nostrud sunt sunt dolor qui.",
    department: "Gynecologist/Obstetrician",
    location: {
      type: "Point",
      coordinates: [24.531238, 81.2860505],
    },
  },
  {
    _id: "652586ab4e2c64c5adfb8f8c",
    index: 74,
    isActive: false,
    age: 46,
    name: "Whitehead Molina",
    gender: "Female",
    fees: 3190,
    awards: "Enim proident elit amet veniam commodo laboris enim tempor eu.",
    education:
      "Proident consequat proident non fugiat ipsum ipsum Lorem dolor est.",
    memberships:
      "Veniam ut consequat non velit laborum Lorem enim aliqua sunt laboris irure quis.",
    experience: 4,
    registrations:
      "Sit commodo minim adipisicing officia laborum elit voluptate aliquip ea.",
    department: "Orthopedist",
    location: {
      type: "Point",
      coordinates: [24.522721, 81.2876641],
    },
  },
  {
    _id: "652586ab026a7eb41a57a8fc",
    index: 75,
    isActive: true,
    age: 57,
    name: "Gretchen Wallace",
    gender: "Male",
    fees: 2933,
    awards:
      "Reprehenderit consectetur eiusmod officia eu excepteur ullamco laboris occaecat deserunt.",
    education: "Incididunt mollit laboris eiusmod do ut.",
    memberships:
      "Est exercitation adipisicing sunt nostrud cillum cupidatat nostrud occaecat cupidatat dolor duis.",
    experience: 5,
    registrations: "Dolor commodo esse velit consectetur.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.529479, 81.2821234],
    },
  },
  {
    _id: "652586ab469e51beb9f95a9f",
    index: 76,
    isActive: false,
    age: 55,
    name: "Davidson Duncan",
    gender: "Male",
    fees: 1864,
    awards: "Sit laborum id do sint amet qui proident Lorem cupidatat irure.",
    education: "Cupidatat deserunt consequat ut fugiat minim cillum aliquip.",
    memberships:
      "Anim reprehenderit enim occaecat nisi excepteur laboris ipsum sint adipisicing deserunt.",
    experience: 4,
    registrations: "Voluptate id Lorem non incididunt fugiat.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.529089, 81.2839314],
    },
  },
  {
    _id: "652586abf00929eaf11024c7",
    index: 77,
    isActive: true,
    age: 59,
    name: "Quinn Wilkinson",
    gender: "Male",
    fees: 1609,
    awards: "Aute reprehenderit Lorem nisi ea commodo mollit excepteur aute.",
    education: "Veniam ad laborum adipisicing culpa eu incididunt enim fugiat.",
    memberships:
      "Sit officia excepteur ad ipsum Lorem veniam qui esse ea nisi quis amet laborum.",
    experience: 6,
    registrations:
      "Occaecat id exercitation dolore esse mollit veniam sunt nulla labore.",
    department: "Orthopedist",
    location: {
      type: "Point",
      coordinates: [24.529966, 81.2793835],
    },
  },
  {
    _id: "652586abadc55d9691094ffe",
    index: 78,
    isActive: true,
    age: 42,
    name: "Elisabeth Wagner",
    gender: "Male",
    fees: 4574,
    awards:
      "Dolore ut nisi id adipisicing deserunt magna exercitation ea fugiat ut pariatur duis ex.",
    education:
      "Ut cupidatat excepteur voluptate dolor duis minim amet laboris aute enim.",
    memberships:
      "Duis reprehenderit velit eu eu qui sint nisi anim officia Lorem.",
    experience: 5,
    registrations:
      "Occaecat nulla magna dolore amet amet nostrud reprehenderit ad reprehenderit.",
    department: "Dentist",
    location: {
      type: "Point",
      coordinates: [24.52389, 81.2857857],
    },
  },
  {
    _id: "652586ab9512e427503e7a04",
    index: 79,
    isActive: true,
    age: 37,
    name: "Tamika Webster",
    gender: "Male",
    fees: 3462,
    awards: "Culpa minim magna anim nisi reprehenderit ad.",
    education: "Mollit sunt anim quis mollit incididunt.",
    memberships:
      "Cupidatat nisi culpa dolor excepteur ad quis consequat duis non anim reprehenderit enim.",
    experience: 1,
    registrations: "Et exercitation pariatur sunt commodo occaecat ea.",
    department: "General physician",
    location: {
      type: "Point",
      coordinates: [24.524221, 81.2794944],
    },
  },
  {
    _id: "652586ab1fabcfd7f6e71866",
    index: 80,
    isActive: false,
    age: 49,
    name: "Corinne Clay",
    gender: "Female",
    fees: 2973,
    awards:
      "Sit do reprehenderit enim velit laborum pariatur duis dolore consequat ea.",
    education: "Ex reprehenderit non est eiusmod irure nostrud sit.",
    memberships:
      "Magna dolore nisi labore consequat adipisicing consequat mollit mollit eiusmod labore et ad officia esse.",
    experience: 9,
    registrations: "Ex ipsum ut dolore quis elit veniam enim consequat culpa.",
    department: "Dentist",
    location: {
      type: "Point",
      coordinates: [24.52845, 81.2794378],
    },
  },
  {
    _id: "652586abc2d7686780bc7e73",
    index: 81,
    isActive: false,
    age: 45,
    name: "Kathleen Gould",
    gender: "Male",
    fees: 2734,
    awards:
      "Sunt consectetur excepteur Lorem duis duis duis eiusmod commodo consectetur incididunt.",
    education: "Ut culpa anim occaecat ea voluptate.",
    memberships:
      "Cupidatat laborum consequat ea ad mollit commodo consectetur.",
    experience: 5,
    registrations: "In ea aliqua sint officia velit laborum minim.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.523833, 81.2885406],
    },
  },
  {
    _id: "652586ab4d7634360c17376c",
    index: 82,
    isActive: true,
    age: 60,
    name: "Brennan Jennings",
    gender: "Female",
    fees: 3312,
    awards: "Adipisicing cupidatat ullamco cillum in ut culpa.",
    education:
      "Ut qui est irure ad sit cillum enim sunt sunt elit commodo adipisicing esse.",
    memberships: "Nisi dolor eiusmod officia esse.",
    experience: 3,
    registrations:
      "Dolore ad magna duis nisi Lorem nostrud aliquip velit reprehenderit anim Lorem sunt.",
    department: "Gynecologist/Obstetrician",
    location: {
      type: "Point",
      coordinates: [24.529544, 81.282879],
    },
  },
  {
    _id: "652586ab114c2498a1addc34",
    index: 83,
    isActive: true,
    age: 53,
    name: "Tommie Bray",
    gender: "Female",
    fees: 2584,
    awards: "Veniam ullamco do elit labore in deserunt nostrud.",
    education:
      "Commodo eu sint duis mollit dolor exercitation cupidatat consequat culpa laborum.",
    memberships:
      "Laborum et laboris sint Lorem cupidatat in laboris nostrud excepteur culpa.",
    experience: 8,
    registrations:
      "Cillum ex aliqua consequat nulla cupidatat Lorem esse reprehenderit laboris.",
    department: "Gastroenterologist",
    location: {
      type: "Point",
      coordinates: [24.530275, 81.2849392],
    },
  },
  {
    _id: "652586ab4630e31a4188a128",
    index: 84,
    isActive: false,
    age: 32,
    name: "Cathy Hammond",
    gender: "Female",
    fees: 3596,
    awards: "Sit do pariatur magna consequat magna quis esse quis.",
    education: "Tempor eiusmod est nisi aute incididunt ea deserunt non quis.",
    memberships:
      "Veniam incididunt incididunt est non ipsum quis amet exercitation minim.",
    experience: 9,
    registrations:
      "Commodo dolore ad consequat culpa sit id enim velit culpa irure.",
    department: "General physician",
    location: {
      type: "Point",
      coordinates: [24.522565, 81.285993],
    },
  },
  {
    _id: "652586ab0fc1e52f4c1865ca",
    index: 85,
    isActive: false,
    age: 60,
    name: "Madelyn Sampson",
    gender: "Male",
    fees: 4527,
    awards:
      "Cillum anim sunt exercitation proident ex anim incididunt aute laboris ex.",
    education: "Dolore sit Lorem commodo quis adipisicing do.",
    memberships:
      "Magna adipisicing sint commodo culpa in dolore magna duis est quis voluptate duis velit.",
    experience: 4,
    registrations:
      "Nostrud magna dolore occaecat ex exercitation adipisicing fugiat magna ut fugiat cupidatat ullamco.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.528138, 81.284633],
    },
  },
  {
    _id: "652586abd9bf3af42b94b0e5",
    index: 86,
    isActive: true,
    age: 39,
    name: "Lynnette Key",
    gender: "Female",
    fees: 1578,
    awards: "Aliquip sunt dolore minim consequat consequat.",
    education: "Reprehenderit dolore in cupidatat consectetur minim velit.",
    memberships:
      "Laborum ut officia ea Lorem quis amet quis officia ea voluptate cupidatat sint.",
    experience: 4,
    registrations: "Officia ad consectetur id est nulla veniam.",
    department: "Gynecologist/Obstetrician",
    location: {
      type: "Point",
      coordinates: [24.523076, 81.281036],
    },
  },
  {
    _id: "652586ab23ee1d8b54dd3af5",
    index: 87,
    isActive: false,
    age: 58,
    name: "Ferguson Walters",
    gender: "Female",
    fees: 2257,
    awards: "In est aliqua aliquip labore id.",
    education:
      "Ullamco culpa ut laborum officia exercitation reprehenderit ea non sint est labore nisi velit Lorem.",
    memberships:
      "Duis incididunt voluptate sint reprehenderit quis sunt anim in duis non nulla irure consequat.",
    experience: 2,
    registrations:
      "Est ut nisi culpa officia reprehenderit qui culpa aute nulla adipisicing proident minim nostrud nisi.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.525737, 81.2847422],
    },
  },
  {
    _id: "652586ab98871d3ad2ae791e",
    index: 88,
    isActive: true,
    age: 49,
    name: "Edwards Hewitt",
    gender: "Male",
    fees: 4459,
    awards:
      "Ipsum nisi dolor ullamco aliqua cupidatat Lorem aliquip nulla veniam consectetur eu quis dolore consectetur.",
    education:
      "Do dolore eiusmod officia pariatur tempor ullamco ex dolor sint culpa.",
    memberships:
      "Magna do sunt in est exercitation mollit officia laboris sit irure.",
    experience: 8,
    registrations: "Esse sint et non sunt elit.",
    department: "General physician",
    location: {
      type: "Point",
      coordinates: [24.522795, 81.285131],
    },
  },
  {
    _id: "652586ab499644bccfb6d858",
    index: 89,
    isActive: false,
    age: 60,
    name: "Dona Wright",
    gender: "Male",
    fees: 2250,
    awards:
      "Ad ut quis deserunt quis et esse ad sunt consequat voluptate anim mollit esse dolore.",
    education: "Ea laborum aliqua ut eiusmod id cupidatat minim Lorem.",
    memberships:
      "Incididunt nisi aute proident culpa irure excepteur cillum laborum officia qui laborum ullamco.",
    experience: 7,
    registrations:
      "Ut deserunt id est anim elit consectetur nisi irure ut do tempor.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.531491, 81.2890281],
    },
  },
  {
    _id: "652586ab150e0d10a9204528",
    index: 90,
    isActive: false,
    age: 40,
    name: "Marta Russell",
    gender: "Female",
    fees: 1789,
    awards:
      "Mollit tempor id qui ad ut culpa proident irure adipisicing pariatur.",
    education:
      "Minim velit nostrud cillum pariatur nostrud velit magna ex adipisicing consectetur commodo quis.",
    memberships: "Cupidatat sunt pariatur ea dolor occaecat id eiusmod.",
    experience: 4,
    registrations:
      "Qui amet dolore velit quis aliqua cillum laboris excepteur tempor.",
    department: "Gastroenterologist",
    location: {
      type: "Point",
      coordinates: [24.528119, 81.2860814],
    },
  },
  {
    _id: "652586ab2a85fb16df119b37",
    index: 91,
    isActive: false,
    age: 56,
    name: "Joanna Mays",
    gender: "Male",
    fees: 3691,
    awards: "Tempor veniam id aute exercitation sint sint est minim commodo.",
    education: "Nulla laborum tempor minim excepteur consequat mollit.",
    memberships: "Ut proident eiusmod enim anim nisi consequat.",
    experience: 10,
    registrations:
      "Commodo ad do nostrud sunt proident amet ut exercitation duis.",
    department: "Gynecologist/Obstetrician",
    location: {
      type: "Point",
      coordinates: [24.524754, 81.2859486],
    },
  },
  {
    _id: "652586ab106d5b452060b433",
    index: 92,
    isActive: false,
    age: 33,
    name: "Bradford Ballard",
    gender: "Female",
    fees: 2681,
    awards: "Non ex ipsum officia Lorem labore.",
    education: "Velit est proident nulla deserunt aliqua reprehenderit.",
    memberships:
      "Aute nisi do qui veniam deserunt duis consectetur non Lorem laboris dolor aliquip mollit anim.",
    experience: 5,
    registrations:
      "Tempor eu mollit culpa voluptate irure occaecat enim nulla ad aliquip.",
    department: "Physiotherapist",
    location: {
      type: "Point",
      coordinates: [24.529247, 81.2835162],
    },
  },
  {
    _id: "652586ab97d0d0d1da90ef16",
    index: 93,
    isActive: false,
    age: 57,
    name: "Priscilla Ware",
    gender: "Male",
    fees: 1984,
    awards:
      "Aute duis adipisicing aute do reprehenderit nulla proident ex exercitation.",
    education:
      "Do sit elit aliquip amet nostrud qui esse ullamco officia nisi ea ea mollit sint.",
    memberships:
      "Ut deserunt pariatur in adipisicing aute eiusmod cupidatat irure consequat id esse reprehenderit.",
    experience: 6,
    registrations: "Enim consectetur Lorem veniam ad.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.531093, 81.2833189],
    },
  },
  {
    _id: "652586aba2a214f71262a306",
    index: 94,
    isActive: false,
    age: 51,
    name: "Robertson Matthews",
    gender: "Male",
    fees: 4026,
    awards:
      "Nostrud veniam eu labore nulla aliqua dolore sunt qui proident aliquip consectetur.",
    education:
      "Eu aliquip aliqua voluptate Lorem velit sint aute adipisicing duis exercitation non adipisicing.",
    memberships: "Dolor nisi ipsum eiusmod elit.",
    experience: 10,
    registrations:
      "Aliquip velit elit exercitation culpa sint fugiat quis et esse nisi eu sit do nulla.",
    department: "General surgeon",
    location: {
      type: "Point",
      coordinates: [24.529585, 81.280884],
    },
  },
  {
    _id: "652586abaa0729b6ae0bf847",
    index: 95,
    isActive: false,
    age: 41,
    name: "Agnes Sawyer",
    gender: "Female",
    fees: 3288,
    awards:
      "Laboris incididunt consequat ipsum cupidatat aliqua cupidatat exercitation tempor reprehenderit.",
    education: "Lorem non deserunt dolore deserunt laborum.",
    memberships:
      "Ex nulla ut proident in ullamco minim tempor consectetur proident do cupidatat Lorem sint ex.",
    experience: 2,
    registrations:
      "Ipsum dolore mollit in nisi magna do occaecat consequat adipisicing sint do.",
    department: "Orthopedist",
    location: {
      type: "Point",
      coordinates: [24.529843, 81.2866203],
    },
  },
  {
    _id: "652586ab836da57b010cb7b7",
    index: 96,
    isActive: false,
    age: 45,
    name: "Wynn Riggs",
    gender: "Female",
    fees: 4362,
    awards:
      "Aute labore velit id laboris tempor nulla velit nulla labore proident ut.",
    education: "Exercitation et mollit enim sint esse.",
    memberships: "Lorem aute culpa officia Lorem adipisicing.",
    experience: 1,
    registrations: "Culpa ullamco non laboris nulla nostrud quis.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.525616, 81.2835439],
    },
  },
  {
    _id: "652586ab571a71cf42036858",
    index: 97,
    isActive: true,
    age: 32,
    name: "Davenport Hopkins",
    gender: "Female",
    fees: 2457,
    awards:
      "Pariatur excepteur ex consectetur labore reprehenderit ea incididunt amet reprehenderit.",
    education: "Duis in eiusmod laboris deserunt commodo et.",
    memberships:
      "Anim do commodo nisi sunt veniam cillum aute excepteur magna ipsum ullamco.",
    experience: 1,
    registrations: "Incididunt quis anim fugiat commodo et.",
    department: "Pediatrician",
    location: {
      type: "Point",
      coordinates: [24.523785, 81.288894],
    },
  },
  {
    _id: "652586abbe7016dda351d37e",
    index: 98,
    isActive: false,
    age: 56,
    name: "Rosetta Duran",
    gender: "Male",
    fees: 4439,
    awards: "Lorem sit adipisicing pariatur consequat voluptate velit in ad.",
    education: "Deserunt voluptate dolor occaecat qui.",
    memberships:
      "Sunt nulla fugiat reprehenderit esse quis laborum enim commodo est deserunt mollit proident.",
    experience: 7,
    registrations:
      "Sit in elit irure ea laboris id et laborum tempor eiusmod culpa.",
    department: "Dietitian/Nutrition",
    location: {
      type: "Point",
      coordinates: [24.525376, 81.2844424],
    },
  },
  {
    _id: "652586ab45f881ffa987d5de",
    index: 99,
    isActive: false,
    age: 54,
    name: "Jarvis Garrett",
    gender: "Female",
    fees: 4985,
    awards: "Dolor quis ea proident enim ad excepteur aute.",
    education:
      "Dolor ad veniam voluptate ut dolor do sint proident laborum eiusmod.",
    memberships:
      "Incididunt officia mollit dolore ut deserunt pariatur Lorem ipsum incididunt officia.",
    experience: 2,
    registrations: "Voluptate velit culpa quis cupidatat labore reprehenderit.",
    department: "General physician",
    location: {
      type: "Point",
      coordinates: [24.525759, 81.2841648],
    },
  },
];

export default DoctorsData;
