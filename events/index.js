import express from "express"
import morgan from "morgan"
import cors from "cors"
import fetch from "node-fetch"

function bootstrap() {
	const app = express()

	app.use(cors())
	app.use(morgan("dev"))
	app.use(express.json())

	app.post("/", async (req, res) => {
		await fetch("http://survey:3000/events", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(req.body),
		}).catch((err) => console.log(err))

		return res.status(200).send({ status: true })
	})

	app.listen(3002, () => console.log("app started"))
}

bootstrap()
