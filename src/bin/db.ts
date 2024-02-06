import { Sequelize } from "sequelize"

const dbName = process.env.MYSQLDB_DATABASE ?? ""
const dbUser = process.env.MYSQLDB_USER ?? ""
const dbHost = process.env.MYSQLDB_HOST ?? ""
const dbPassword = process.env.MYSQLDB_PASSWORD ?? ""

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
})

try {
    sequelize.authenticate()
    console.log(`Successfully connected to the database.`)
} catch (error) {
    console.error(`Database connection failed: `, error)
}

export default sequelize