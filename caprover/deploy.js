require('dotenv').config()
const execSync = require('child_process').execSync

execSync(
    `caprover deploy -u ${process.env.CAPROVER_URL} ` +
    `-a ${process.env.CAPROVER_APP} ` +
    `-p ${process.env.CAPROVER_PASSWORD} ` +
    `-n ${process.env.CAPROVER_NAME} ` +
    `-b main`, { stdio: 'inherit' })