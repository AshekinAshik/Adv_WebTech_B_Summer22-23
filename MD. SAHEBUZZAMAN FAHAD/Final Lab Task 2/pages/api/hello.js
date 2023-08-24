// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'MD Fahad' })


  if(req === "DELETE")
  {
    const managerId = req.body.managerId;
  }
}
