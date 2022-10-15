require('dotenv').config()
const execSync = require('child_process').execSync

const create = execSync(`envsubst < ./caprover/create.json`)
const secure = execSync(`envsubst < ./caprover/secure.json`)
const update = execSync(`envsubst < ./caprover/update.json`)

execSync(`caprover api -u ${process.env.CAPROVER_URL} ` +
    `-p ${process.env.CAPROVER_PASSWORD} ` +
    `-n ${process.env.CAPROVER_NAME} ` +
    `-t /user/apps/appDefinitions/register -m POST -d '${create}'`,
    { stdio: 'inherit' }
)

execSync(`caprover api -u ${process.env.CAPROVER_URL} ` +
    `-p ${process.env.CAPROVER_PASSWORD} ` +
    `-n ${process.env.CAPROVER_NAME} ` +
    `-t /user/apps/appDefinitions/enablebasedomainssl -m POST -d '${secure}'`,
    { stdio: 'inherit' }
)

execSync(`caprover api -u ${process.env.CAPROVER_URL} ` +
    `-p ${process.env.CAPROVER_PASSWORD} ` +
    `-n ${process.env.CAPROVER_NAME} ` +
    `-t /user/apps/appDefinitions/update -m POST -d '${update}'`,
    { stdio: 'inherit' }
)