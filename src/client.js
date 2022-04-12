const sanityClient = require('@sanity/client')
export default sanityClient({
  projectId: 'b7xh9tvy',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
})

