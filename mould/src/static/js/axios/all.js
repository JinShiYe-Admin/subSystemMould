import instanceAxios from '@/static/js/axios'
import axios from 'axios'

/**
 * ALL
 * @param args
 * @returns {Promise<any>}
 */
export default function all(...args) {
  return new Promise((resolve, reject) => {
    axios.all(args)
      .then(axios.spread((...responseArgs) => {
        resolve(responseArgs)
      }))
  })
}
