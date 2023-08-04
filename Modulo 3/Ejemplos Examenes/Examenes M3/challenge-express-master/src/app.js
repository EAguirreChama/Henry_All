var express = require("express");
var server = express();
var bodyParser = require("body-parser");

var model = {
    clients: {},

    reset: () => {
        model.clients = {}
    },

    attend: (name, date) => {
        for (const appointment of model.clients[name]){
            if(appointment.date === date){
                appointment.status = "attended"
                return appointment
            }
        }
    },
    expire: (name, date) => {
        for (const appointment of model.clients[name]){
            if(appointment.date === date){
                appointment.status = "expired"
            }
        }
    },
    cancel: (name, date) => {
        for (const appointment of model.clients[name]){
            if(appointment.date === date){
                appointment.status = "cancelled"
            }
        }
    },

    erase: (name, value) => {
        switch(value){
            case "attended":
                const attFind = model.clients[name].filter(app => app.status == value)
                model.clients[name] = model.clients[name].filter((element) => {
                    return element.status !== value
                })
                return attFind
            case "expired":
                const expFind = model.clients[name].filter(app => app.status == value)
                model.clients[name] = model.clients[name].filter((element) => {
                    return element.status !== value
                })
                return expFind
            case "cancelled":
                const canFind = model.clients[name].filter(app => app.status == value)
                model.clients[name] = model.clients[name].filter((element) => {
                    return element.status !== value
                })
                return canFind
            default:
                const defFind = model.clients[name].filter(app => app.status == value)
                model.clients[name] = model.clients [name].filter(
                    (element) => element.date !== value
                )
                return defFind
        }
    },

    addAppointment: (name, appointment) => {
        appointment.status = `pending`;
        
        if(model.clients[name]){
            model.clients[name].push(appointment)
        }else {
            model.clients[name] = [appointment]
        }
        return appointment;
    },

    getAppointments: (name, status) => {
        switch(status){
            case "pending":
                return model.clients[name].filter(element => element.status === status)
            
            case "attended":
                return model.clients[name].filter(element => element.status === status)
                
            case "expired":
                return model.clients[name].filter(element => element.status === status)
            
            case "cancelled":
                return model.clients[name].filter(element => element.status === status)

            default:
                return model.clients[name];
        }
    },

    getClients: () => {
        return Object.keys(model.clients)
    },
};

server.use(bodyParser.json());

server.get("/api", (req, res) => {
    res.status(200).json(model.clients)
})

server.post("/api/Appoinments", (req, res) => {
    try {
        const { client, appointment } = req.body;

        if(!client) throw Error ("the body must have a client property")
        
        if (typeof client !== "string") throw Error ("client must be a string")

        const appointments = model.addAppointment(client, appointment)
        return res.status(200).json(appointments)

    } catch (error) {
        return res.status(400).send(error.message);
    }
})

server.get("/api/Appointments/:name", (req, res) => {
    try {
        const { name } = req.params
        const { date, option } = req.query
        const options = ["attend" , "expire" , "cancel"]

        if(!model.getClients().includes(name)) throw Error ("the client does not exist")
    
        const clientFind = model.clients[name].find((app) => {
            return app.date === date
        })
        if(!clientFind) throw Error ("the client does not have a appointment for that date")

        if(!options.includes(option)) throw Error ("the option must be attend, expire or cancel")
        
        switch(option){
            case options[0]:
                return res.status(200).json(module.attend(name, date))
            
            case options[1]:
                return res.status(200).json(module.expire(name, date))

            default:
                return res.status(200).json(module.cancel(name, date))    
        }
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

server.get("/api/Appointments/:name/erase", (req, res) => {
    try {
        const { name } = req.params
        const { date } = req.query

        if(!model.getClients().includes(name)) throw Error ("the client does not exist")

        const deleteAp = model.erase(name, date)
        return res.status(200).json(deleteAp)

    } catch (error) {
        return res.status(400).send(error.message)
    }
})

server.get("/api/Appointments/getAppointments/:name", (req, res) => {
    const { name } = req.params;
    const { status } = req.query;

    const appoinGet = model.getAppointments(name, status)
    return res.status(200).json(appoinGet)

})

server.get("/api/Appointments/clients", (req, res) => {
    const appoinGet = model.getClients()
    return res.status(200).json(appoinGet)
})

server.listen(3003);
module.exports = { model, server };
