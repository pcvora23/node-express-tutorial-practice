const { people } = require('../data')
const getPeople = (req, res) => {
    res.status(200).send({ success: true, data: people })
}

const createPeople = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: "Please provide a name" })
    }
    return res.status(201).send({ success: true, person: name })
}

const updatePeople = (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${id}` });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        } return person
    })
    return res.status(200).json({ success: true, data: newPeople });
}

const deletePeople = (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${id}` });
    }
    const filteredPeople = people.filter((person) => person.id !== Number(id))
    return res.status(200).json({ success: true, data: filteredPeople });
}

module.exports = { getPeople, createPeople, updatePeople, deletePeople }