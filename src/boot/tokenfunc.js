import { parseProfile } from './profileStorage'
export default (params = {}) => {
  return {
    headers: {
      Authorization: `Bearer ${parseProfile() ? parseProfile().token : null}`
    },
    params: params
  }
}
