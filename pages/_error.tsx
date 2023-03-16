import { NextPage } from 'next'

interface Props {
  statusCode?: number;
  isError: boolean;
}

const Error: NextPage<Props> = function ({ statusCode, isError }) {
  return (
    <div className="error page">
      {statusCode ? <>
        <h1>{statusCode}</h1>
        <p>Error occured</p>
      </> : <p>An error occurred on client</p> }
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode, isError: true }
}
  
export default Error