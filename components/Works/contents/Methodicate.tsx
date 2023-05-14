

export default function Methodicate(){

  return <div>
    <p>A noble cause, to venture in science..</p>
    <p>Methodicate asked me to create a document converter. They wanted to create a publishable pdf version of all the user&lsquo;s research.</p>
    <p>We used <a href="https://pandoc.org/" rel="noopener noreferrer" target="_blank">Pandoc</a> for that.</p>
    <p>We created a microservice, listening on RabbitMQ that converts a methodicate-format Research to a pdf file.</p>
    <br />
    <p>Technologies&nbsp;used:{' '}
        <a href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">NodeJS</a>&#8288;,{' '}
        <a href="https://www.rabbitmq.com/" rel="noopener noreferrer" target="_blank">RabbitMQ</a>&#8288;,{' '}
        <a href="https://aws.amazon.com/elasticbeanstalk/" rel="noopener noreferrer" target="_blank">Elastic&nbsp;Beanstalk</a>&#8288;,{' '}
        and of course, <a href="https://pandoc.org/" rel="noopener noreferrer" target="_blank">Pandoc</a>&#8288;.
    </p>
  </div>

}