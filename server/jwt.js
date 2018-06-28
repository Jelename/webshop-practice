const jwt = require('jsonwebtoken');
//const secret = 'JWT_~secret*\\key'

const secret = process.env.JWT_SECRET || 'JWT_~secret*\\key'

function sign(userId) {
	// ... implement!
}

const signed = jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: '5s' // if ommited, the token will not expire
});


