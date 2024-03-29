const tech = [
  [
    {
      id: 'nodejs',
      width: 2400,
      height: 2643,
      title: 'NodeJs',
      image: 'https://drive.google.com/uc?id=1xdjl3zl3xZUxN9BdUNJrB662UkbeQZcd',
      url: 'https://nodejs.org'
    },
    {
      id: 'firebase',
      width: 500,
      height: 500,
      title: 'Firebase',
      image: 'https://drive.google.com/uc?id=1PDfwgfhh_j6EXuUs0zWSZXmoGNgoWlZ0',
      url: 'https://firebase.google.com/?hl=id'
    },
    {
      id: 'docker',
      width: 1300,
      height: 895,
      title: 'Docker',
      image: 'https://drive.google.com/uc?id=1GJ4lOofgz7g9sN1Zy_Qnw_ZlCGPUTkEd',
      url: 'https://www.docker.com/'
    },
    {
      id: 'cloudflare',
      width: 720,
      height: 240,
      title: 'CloudFlare',
      image: 'https://drive.google.com/uc?id=1Uzxbx6hhY9cp9jmkf24TubWYEbc_tf2y',
      url: 'https://www.cloudflare.com'
    }
  ],
  [
    {
      id: 'express',
      width: 380,
      height: 84,
      title: 'Express.js',
      image: 'https://drive.google.com/uc?id=1pJ2djQU_jd72TpcyAF2vLs_v7MotCqFk',
      url: 'https://expressjs.com/'
    },
    {
      id: 'next',
      width: 380,
      height: 181,
      title: 'Next.js',
      image: 'https://drive.google.com/uc?id=1Md44pUMo0mm3wS84y1U3090S_PtxBveX',
      url: 'https://nextjs.org/'
    },
    // {
    //   id: 'adonis',
    //   title: 'Adonis.js',
    //   image: 'https://drive.google.com/uc?id=1-3NKADUU--TXERUewPhxNxIdxX3Ih57B',
    //   url: 'https://adonisjs.com/'
    // },
  ],
  [
    {
      id: 'socketio',
      width: 201,
      height: 195,
      title: 'Socket.io',
      image: 'https://drive.google.com/uc?id=1_a8qwjGx6jG-Bp8_dyPGpi64bl6blL5N',
      url: 'https://socket.io/'
    },
    // {
    //   id: 'react',
    //   title: 'React.js',
    //   image: 'https://drive.google.com/uc?id=1OobT2TFbsSZcZtOP9O_WcECUVkRmIbeO',
    //   url: 'https://reactjs.org/'
    // },
    {
      id: 'electron',
      width: 500,
      height: 500,
      title: 'Electron',
      image: 'https://drive.google.com/uc?id=1niSB7iK4tNFgtcyBugszKJLjrjw26xgt',
      url: 'https://electronjs.org/'
    },
    // {
    //   id: 'html5',
    //   title: 'HTML 5',
    //   image: 'https://drive.google.com/uc?id=1rhen_bvKk0LFQLQWbigDFcd3UVdT1HRv',
    //   url: 'https://en.wikipedia.org/wiki/HTML5'
    // },
    // {
    //   id: 'css3',
    //   title: 'CSS 3',
    //   image: 'https://drive.google.com/uc?id=1HJt8a7hhKi9hbGIqZrfzV-mr6dq4B50i',
    //   url: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
    // }
  ],
  [ 
    {
      id: 'mongo',
      width: 400,
      height: 277,
      title: 'Mongo DB',
      image: 'https://drive.google.com/uc?id=1njEsakrRbO4abk5-DDa5OmEH0wREg5JW',
      url: 'https://www.mongodb.com/'
    },
    {
      id: 'postgres',
      width: 500,
      height: 500,
      title: 'PostgreSQL',
      image: 'https://drive.google.com/uc?id=1SbuGEKbYmCqENeHo3SaLz_IiedcBrNEp',
      url: 'https://www.postgresql.org/'
    },
    {
      id: 'mysql',
      width: 300,
      height: 300,
      title: 'MySQL',
      image: 'https://drive.google.com/uc?id=1eKBSUikTuDrJ59wEv6NanTds6g-vqLds',
      url: 'https://www.mysql.com/'
    },
    {
      id: 'redis',
      width: 500,
      height: 500,
      title: 'Redis',
      image: 'https://drive.google.com/uc?id=1bTGvc7pbV8hjkgPYIuHuJUh_uo1iZ8GD',
      url: 'https://redis.io/'
    },
    // {
    //   id: 'nats',
    //   title: 'NATS',
    //   image: 'https://drive.google.com/uc?id=1RSM7EgN49vgMmmTTZyX-a3lx50stXLaW',
    //   url: 'https://nats.io/'
    // },
    // {
    //   id: 'elastic',
    //   title: 'Elastic Search',
    //   image: 'https://drive.google.com/uc?id=1F5nDUAyCurDKPwUF72kAPWZJ_416_lXC',
    //   url: 'https://www.elastic.co/'
    // },
    {
      id: 'rabbit',
      width: 500,
      height: 500,
      title: 'RabbitMQ',
      image: 'https://drive.google.com/uc?id=1f7JaSk45TkpCRfaigjTF3KOVoK7dksYf',
      url: 'https://www.rabbitmq.com/'
    }
  ],
  [
    {
      id: 'do',
      width: 500,
      height: 500,
      title: 'Digital Ocean',
      image: 'https://drive.google.com/uc?id=1VXwSv8YJkkGYSwtu24IsoXTIuuh3ViDp',
      url: 'https://www.digitalocean.com/'
    },
    {
      id: 'ec2',
      width: 500,
      height: 500,
      title: 'AWS EC2',
      image: 'https://drive.google.com/uc?id=1RiA0m_saSn_UAuqdAca39c7_c4Gejnwm',
      url: 'https://aws.amazon.com/ec2/'
    },
    {
      id: 's3',
      width: 500,
      height: 500,
      title: 'AWS S3',
      image: 'https://drive.google.com/uc?id=1H7v9yxJF_AOhdnVJc8F-Beg6LV91mBTW',
      url: 'https://aws.amazon.com/s3/'
    },
    {
      id: 'beanstalk',
      width: 402,
      height: 564,
      title: 'AWS Elastic Beanstalk',
      image: 'https://drive.google.com/uc?id=1xGnmgVXuJnHQnmZISWyY0M_44eHHVBxd',
      url: 'https://aws.amazon.com/elasticbeanstalk/'
    }
  ],
  [
    {
      id: 'stripe',
      width: 500,
      height: 500,
      title: 'Stripe',
      image: 'https://drive.google.com/uc?id=1O2RZI2eC-5zvat-COsN_RUE8unH3zYvb',
      url: 'https://stripe.com/'
    },
    {
      id: 'algolia',
      width: 1332,
      height: 331,
      title: 'Algolia',
      image: 'https://drive.google.com/uc?id=1B3OQs1D_T42jXOsAiVkQ-vBzxcewQowy',
      url: 'https://www.algolia.com/'
    },
    {
      id: 'twilio',
      width: 400,
      height: 185,
      title: 'Twilio',
      image: 'https://drive.google.com/uc?id=1IVcNdQ0OdTyW-jsccZppfJcsioeIyQgX',
      url: 'https://www.twilio.com/'
    },
  ],
  [
    {
      id: 'mailchimp',
      width: 500,
      height: 500,
      title: 'Mailchimp',
      image: 'https://drive.google.com/uc?id=1Iua2I2_M4UpqyUmnQz5bsYd1VnLPRr86',
      url: 'https://mailchimp.com/'
    },
    {
      id: 'mailgun',
      width: 1793,
      height: 494,
      title: 'Mailgun',
      image: 'https://drive.google.com/uc?id=1UDJ9-lLF_fM8weYeqlRZXBSiNhf_xyQy',
      url: 'https://www.mailgun.com/'
    },
    {
      id: 'sendgrid',
      width: 3300,
      height: 724,
      title: 'Sendgrid',
      image: 'https://drive.google.com/uc?id=1ctXuZ_bTfY9-hKpCSakyZhmABpAns9nh',
      url: 'https://sendgrid.com/'
    },
  ],
  [
    {
      id: 'github',
      width: 120,
      height: 120,
      title: 'Github',
      image: 'https://drive.google.com/uc?id=15xFdTcpeycgFa4JI59UhOOdNRNcBh2gZ',
      url: 'https://github.com'
    },
    {
      id: 'gitlab',
      width: 500,
      height: 500,
      title: 'Gitlab',
      image: 'https://drive.google.com/uc?id=1a1nIU6nk4iWw4kjIBYiTEILYwukTFemH',
      url: 'https://gitlab.com'
    },
    {
      id: 'bitbucket',
      width: 400,
      height: 400,
      title: 'Bitbucket',
      image: 'https://drive.google.com/uc?id=1QOJ4IvjGG7Kpc3-KOzG6LPdffvgIRhVn',
      url: 'https://bitbucket.org/'
    }
  ]
]

module.exports = tech
