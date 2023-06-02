import autocannon from 'autocannon'

export default function execute(options, cb) {
  const {
    url,
    connections,
    pipelining,
    duration,
    timeout,
    title,
    headers,
    body,
    renderProgressBar,
    renderLatencyTable,
    renderResultsTable
  } = options
  let finalHeaders = {}
  try {
    finalHeaders = JSON.parse(headers)
  } catch (error) {
  }

  const instance = autocannon(
    {
      url,
      connections,
      pipelining,
      duration,
      timeout,
      title,
      headers: finalHeaders,
      body
    },
    cb
  )

  autocannon.track(instance, {
    renderProgressBar,
    renderLatencyTable,
    renderResultsTable
  })

  return instance
}
