import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import { routes } from '../routes'
import { middlewareExample } from '../utils/middlewareExample'
import { crossDomain } from "../utils/crossDomain"
import bodyParser from "body-parser"
import db from "./db"

export const app = express()

const port = process.env.PORT ?? 4568

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(crossDomain)
app.use(middlewareExample)
app.use(routes)

app.get("/ping", (req, res) => {
  return res.send("pong")
})

try {
  db.sync({ force: true }) // use { force: true } apenas para criar a tabela, remova ou defina como false em produção
  console.log('Tables synchronized successfully.')
} catch (error) {
  console.error('Error synchronizing tables: ', error)
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})