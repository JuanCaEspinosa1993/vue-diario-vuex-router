// export const myMutation = ( state ) => {

// }

export const setEntries = ( state, entries ) => {
    //Array con los valores anterior mas los nuevos valores
    state.entries = [...state.entries, ...entries]
    state.isLoading = false

}

export const updateEntry = (state, entry) => {
    const idx = state.entries.map( e => e.id).indexOf(entry.id)
    state.entries[idx] = entry
}

export const addEntry = ( state, entry ) => {
    // state -> entires -> La nueva entrada debe de ser la primera
    state.entries = [entry, ...state.entries]
}


export const deleteEntry = (state, id) => {
    // remover del state.entries el que coincida con id que se pasa como parámetro
    state.entries = state.entries.filter(entry => entry.id !== id)
}