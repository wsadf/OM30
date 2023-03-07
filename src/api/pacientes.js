import api from './base'

export default {
  lista: async () => {
    const { data } = await api.get('pacientes')
    return data
  },

  busca: async (id) => {
    const { data } = await api.get(`pacientes/${id}`)
    return data
  },

  inclui: async (dados) => await api.post('pacientes', dados),

  atualiza: async (id, dados) => await api.put(`pacientes/${id}`, dados),

  exclui: async (id) => await api.delete(`pacientes/${id}`)
}
