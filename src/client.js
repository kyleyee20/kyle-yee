import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "d1mavt3x",
    dataset: "production",
    apiVersion: "2021-05-12",
    token: '',
    useCdn: false,
})