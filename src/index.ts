import express, { Express, Request, Response } from "express";
import pairsOfIntegers from "./pairsOfIntegers";

const app: Express = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const matchingPairs = await pairsOfIntegers(req.body.array, req.body.sum);
    return res.status(200).json({ success: true, payload: matchingPairs });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ success: false, payload: error.message });
    }
  }
});

app.listen(4321, () => {
  console.log("Running on 4321");
});

export default app;