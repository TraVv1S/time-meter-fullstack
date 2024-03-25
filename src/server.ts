import express, { Express, Request, Response } from "express";
const app = express()
const port = 4444

// Сообщение о том, что сервер запущен и прослушивает указанный порт 
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// Создание GET маршрута
app.get('/express_backend', (req: Request, res: Response) => { 
  res.send({ express: '[server]: YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});