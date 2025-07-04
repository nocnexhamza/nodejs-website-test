export default {
  timelineWidget: {
    timelineData: [
      {
        img: require('../../assets/profile/timeline/lesson1.svg').default,
        title: "Lesson 1",
        label: "Self introduction"
      },
      {
        img: require('../../assets/profile/timeline/lesson2.svg').default,
        title: "Lesson 2",
        label: "Dialog at school"
      },
      {
        img: require('../../assets/profile/timeline/lesson3.svg').default,
        title: "Lesson 3",
        label: "Daily conversation"
      },
      {
        img: require('../../assets/profile/timeline/lesson4.svg').default,
        title: "Lesson 4",
        label: "Listening"
      },
      {
        img: require('../../assets/profile/timeline/lesson5.svg').default,
        title: "Quiz",
        label: "First week quiz"
      },
      {
        img: require('../../assets/profile/timeline/lesson6.svg').default,
        title: "Assignment",
        label: "First week assignment"
      },
    ],
    timelineSteps: [
      {
        cardSubtitle: "",
        cardDetailedText: "",
      },
      {
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
      },
      {
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
      },
      {
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
      },
      {
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
      },
      {
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
      },
    ],
  },
  newsGroupData: [
    {
      title:"BBC News",
      time:"15 min ago",
      img: require('../../assets/profile/news/bbcnewsLogo.svg').default,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys typesetting industry.',
    },
    {
      title:"Euronews",
      time:"1 h ago",
      img: require('../../assets/profile/news/cnnLogo.svg').default,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys typesetting industry.',
    },
    {
      title:"CNN",
      time:"3 h ago",
      img: require('../../assets/profile/news/euronewsLogo.svg').default,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys typesetting industry.',
    },
    {
      title:"NBC",
      time:"6 h ago",
      img: require('../../assets/profile/news/nbcLogo.svg').default,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys typesetting industry.',
    },
  ],

  avatarGroupData: [
    {
      title: 'Alisha Swan',
      img: require('../../assets/profile/AlishaSwan.png').default,
    },
    {
      title: 'James Wood',
      img: require('../../assets/profile/JamesWood.png').default,
    },
    {
      title: 'Luis Suares',
      img: require('../../assets/profile/LuisSuares.png').default,
    },
    {
      title: 'Samantha Bird',
      img: require('../../assets/profile/SamanthaBird.png').default,
    },
    {
      title: 'Tara Smith',
      img: require('../../assets/profile/TaraSmith.png').default,
    },
    {
      title: 'Brandy Martins',
      img: require('../../assets/profile/BrandyMartins.png').default,
    },
    {
      title: 'Enzo Macaroni',
      img: require('../../assets/profile/EnzoMacaroni.png').default,
    },
    {
      title: 'Jenny Lim',
      img: require('../../assets/profile/JennyLim.png').default,
    },
  ],
  apexLineChart: {
    series: [
      {
        name: "Products",
        data: [30, 41, 35, 51, 49, 62, 69, 91, 100]
      },
      {
        name: "Services",
        data: [64, 53, 47, 39, 24, 36, 42, 55, 67]
      }
    ],
    options: {
      chart: {
        toolbar: false,
        zoom: {
          enabled: false
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      grid: {
        show: false,
        row: {
          colors: ['transparent'],
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          style: {
            colors: "#6B859E",
          },
        },
      },
      yaxis: {
        tickAmount: 3,
        labels: {
          style: {
            colors: "#6B859E",
          },
        },
      },
      colors: ['#4d53e0', '#41D5E2']
    }
  }
}
