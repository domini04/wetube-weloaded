export const trending = async (req, res) => {
  res.send('Home Page Videos');
};

export const watch = async (req, res) => {
  res.send(`Watch Video #${req.params.id}`);
}

export const see = async (req, res) => {
  console.log(req.params);
  res.send('See');
}

export const edit = async (req, res) => { 
  res.send('Edit Video');
}

export const remove = async (req, res) => { 
  res.send('Remove Video');
}