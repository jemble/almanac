// initialize our faux database
var data = {
    "events": [
        {
            "startDate": "2013-08-01",
            "type":"gig",
            "location":"Jericho Tavern",
            "url":"https://www.facebook.com/events/392200374225756/",
            "confirmation":"yes",
            "info":"headlining",
            "contact":"osprey",
            "bandOrganiser":"keith"
        },
        {
            "startDate": "2013-08-31",
            "type":"gig",
            "location":"Katakylstic Tent",
            "url":"",
            "confirmation":"yes",
            "info":"headlining",
            "contact":"Tim",
            "bandOrganiser":"baker"
        },
        {
            "startDate": "2013-07-22",
            "type":"practice",
            "location":"WOCA",
            "url":"",
            "confirmation":"yes",
            "info":"don't be late",
            "contact":"",
            "bandOrganiser":"keith"
        }
    ]
};

// GET

exports.events = function (req, res) {
    var events = [];
    data.events.forEach(function (event, i) {
        events.push({
            id: i,
            startDate: event.startDate,
            location: event.location,
            type: event.type
        });
    });
    res.json({
        events: events
    });
};

exports.event = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < data.events.length) {
        res.json({
            event: data.events[id]
        });
    } else {
        res.json(false);
    }
};

// POST
exports.addEvent = function (req, res) {
    data.events.push(req.body);
    res.json(req.body);
};

// PUT
exports.editEvent = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.events.length) {
        data.events[id] = req.body;
        res.json(true);
    } else {
        res.json(false);
    }
};

// DELETE
exports.deleteEvent = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.events.length) {
        data.events.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
};