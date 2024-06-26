import journalApi from "@/api/journalApi"

// export const myAction = async ({ commit }) => {

// }

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')

    if (!data){
        commit('setEntries', [])
        return
    }
    
    const entries = []
    for ( let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }
    
    commit('setEntries', entries)
}

export const updateEntry = async ( { commit }, entry ) => {
    const {date, picture, text} = entry
    const dataToSave = {date, picture, text}

    const res = await journalApi.put(`/entries/${entry.id}.json`, dataToSave)
    console.log(res)
    commit('updateEntry', {...entry})

}

export const createEntry = async ({ commit }, entry) => {
    //dataToSave
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text}

    const data = await journalApi.post(`/entries.json`, dataToSave)
    dataToSave.id = data.name
    // data = {"name": "-NuPqENdCXCaddcv6WwS"}
    // commit -> addEntry
    commit('addEntry', dataToSave)

    return data.name

}

export const deleteEntry = async ({ commit }, id) => {
    // await journalApi.delete(path)
    const res = await journalApi.delete(`/entries/${id}.json`)
    console.log("Eliminando entry con id : ", res)
    
    // commit => deleteEntry
    commit('deleteEntry', id)
}