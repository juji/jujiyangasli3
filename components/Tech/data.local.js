const tech = [
  [
    {
      id: 'nodejs',
      width: 2400,
      height: 2643,
      title: 'NodeJs',
      image: '/images/tech/nodejs.webp',
      url: 'https://nodejs.org'
    },
    {
      id: 'bun',
      width: 80,
      height: 70,
      title: 'Bun',
      image: '/images/tech/bun.svg',
      url: 'https://bun.sh/'
    },
    {
      id: 'firebase',
      width: 500,
      height: 500,
      title: 'Firebase',
      image: '/images/tech/firebase.webp',
      url: 'https://firebase.google.com/?hl=id'
    },
    {
      id: 'docker',
      width: 1300,
      height: 895,
      title: 'Docker',
      image: '/images/tech/docker.webp',
      url: 'https://www.docker.com/'
    },
    {
      id: 'cloudflare',
      width: 720,
      height: 240,
      title: 'CloudFlare',
      image: '/images/tech/cloudflare.webp',
      url: 'https://www.cloudflare.com'
    }
  ],
  [
    {
      id: 'express',
      width: 380,
      height: 84,
      title: 'Express.js',
      image: '/images/tech/expressjs.webp',
      url: 'https://expressjs.com/'
    },
    {
      id: 'react',
      width: 500,
      height: 500,
      title: 'React',
      image: '/images/tech/react.webp',
      url: 'https://react.dev/'
    },
    {
      id: 'next',
      width: 380,
      height: 181,
      title: 'Next.js',
      image: '/images/tech/nextjs.webp',
      url: 'https://nextjs.org/'
    },
  ],
  [
    {
      id: 'socketio',
      width: 201,
      height: 195,
      title: 'Socket.io',
      image: '/images/tech/socketio.webp',
      url: 'https://socket.io/'
    },
    {
      id: 'electron',
      width: 500,
      height: 500,
      title: 'Electron',
      image: '/images/tech/electron.webp',
      url: 'https://electronjs.org/'
    },
    // {
    //   id: 'html5',
    //   title: 'HTML 5',
    //   image: '/images/tech/html5.webp',
    //   url: 'https://en.wikipedia.org/wiki/HTML5'
    // },
    // {
    //   id: 'css3',
    //   title: 'CSS 3',
    //   image: '/images/tech/css3.webp',
    //   url: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
    // }
  ],
  [ 
    {
      id: 'mongo',
      width: 400,
      height: 277,
      title: 'Mongo DB',
      image: '/images/tech/mongo.webp',
      url: 'https://www.mongodb.com/'
    },
    {
      id: 'postgres',
      width: 500,
      height: 500,
      title: 'PostgreSQL',
      image: '/images/tech/postgre.webp',
      url: 'https://www.postgresql.org/'
    },
    {
      id: 'mysql',
      width: 300,
      height: 300,
      title: 'MySQL',
      image: '/images/tech/mysql.webp',
      url: 'https://www.mysql.com/'
    },
    {
      id: 'redis',
      width: 500,
      height: 500,
      title: 'Redis',
      image: '/images/tech/redis.webp',
      url: 'https://redis.io/'
    },
    // {
    //   id: 'nats',
    //   title: 'NATS',
    //   image: '/images/tech/nats.webp',
    //   url: 'https://nats.io/'
    // },
    // {
    //   id: 'elastic',
    //   title: 'Elastic Search',
    //   image: '/images/tech/elastic.webp',
    //   url: 'https://www.elastic.co/'
    // },
    {
      id: 'rabbit',
      width: 500,
      height: 500,
      title: 'RabbitMQ',
      image: '/images/tech/rabbitmq.webp',
      url: 'https://www.rabbitmq.com/'
    }
  ],
  [
    {
      id: 'do',
      width: 500,
      height: 500,
      title: 'Digital Ocean',
      image: '/images/tech/digitalocean.webp',
      url: 'https://www.digitalocean.com/'
    },
    {
      id: 'ec2',
      width: 500,
      height: 500,
      title: 'AWS EC2',
      image: '/images/tech/ec2.webp',
      url: 'https://aws.amazon.com/ec2/'
    },
    {
      id: 's3',
      width: 500,
      height: 500,
      title: 'AWS S3',
      image: '/images/tech/s3.webp',
      url: 'https://aws.amazon.com/s3/'
    },
    {
      id: 'beanstalk',
      width: 402,
      height: 564,
      title: 'AWS Elastic Beanstalk',
      image: '/images/tech/beanstalk.webp',
      url: 'https://aws.amazon.com/elasticbeanstalk/'
    }
  ],
  [
    {
      id: 'stripe',
      width: 500,
      height: 500,
      title: 'Stripe',
      image: '/images/tech/stripe.webp',
      url: 'https://stripe.com/'
    },
    {
      id: 'algolia',
      width: 1332,
      height: 331,
      title: 'Algolia',
      image: '/images/tech/algolia.webp',
      url: 'https://www.algolia.com/'
    },
    {
      id: 'twilio',
      width: 400,
      height: 185,
      title: 'Twilio',
      image: '/images/tech/twilio.webp',
      url: 'https://www.twilio.com/'
    },
  ],
  [
    {
      id: 'mailchimp',
      width: 500,
      height: 500,
      title: 'Mailchimp',
      image: '/images/tech/mailchimp.webp',
      url: 'https://mailchimp.com/'
    },
    {
      id: 'mailgun',
      width: 1793,
      height: 494,
      title: 'Mailgun',
      image: '/images/tech/mailgun.webp',
      url: 'https://www.mailgun.com/'
    },
    {
      id: 'sendgrid',
      width: 3300,
      height: 724,
      title: 'Sendgrid',
      image: '/images/tech/sendgrid.webp',
      url: 'https://sendgrid.com/'
    },
  ],
  [
    {
      id: 'github',
      width: 120,
      height: 120,
      title: 'Github',
      image: '/images/tech/github.webp',
      url: 'https://github.com'
    },
    {
      id: 'gitlab',
      width: 500,
      height: 500,
      title: 'Gitlab',
      image: '/images/tech/gitlab.webp',
      url: 'https://gitlab.com'
    },
    {
      id: 'bitbucket',
      width: 400,
      height: 400,
      title: 'Bitbucket',
      image: '/images/tech/bitbucket.webp',
      url: 'https://bitbucket.org/'
    }
  ]
]


module.exports = tech