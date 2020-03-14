const renderIndex = (req, res) => {
    res.render('index')
}

const renderNewEntry = (req, res) => {
    res.render('new-entry')
}

const createNewEntry = (req, res) => {
    res.render('new-entry')
}

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry
}