const { http } = require('./request')

export const login = (code) =>{
  return http('/login',{code})
}