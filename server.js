const express = require("express");
const cors = require("cors");

let data = { message: "여러분 화이팅!" };

const app = express();

app.use(
  cors({
    origin: "http://192.168.55.177:5501",
    methods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
    headers: "Content-Type",
  })
);
app.use(express.json());
app.use(express.text());

app.options("/", (req, res) => {
  return res.send("요청을 보내주세요 🙄");
});

app.get("/", (req, res) => {
  return res.json(data);
});

app.post("/", (req, res) => {
  const [key, value] = req.body;
  data = { ...data, [key]: value };
  return res.send("데이터가 추가되었습니다 😊");
});

app.put("/", (req, res) => {
  const newData = req.body;
  data.message = newData.newMessage;
  return res.send(`✨ 업데이트된 데이터: ${newData.newMessage}`);
});

app.delete("/", (req, res) => {
  data = {};
  return res.send("데이터가 삭제되었습니다 😳");
});

app.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
