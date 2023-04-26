const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put('https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {'private_key': 'f5a96787-7971-4a51-9bc6-5a3fde2094cc'}}
    )
    return res.status(r.status).json(r.data);
  }catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);