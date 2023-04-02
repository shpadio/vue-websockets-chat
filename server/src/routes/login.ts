import express from "express";


const router = express.Router();

router.get('/',(req,res) => {
        console.log(req,'GET REQ!')
})
router.post('/login',(req, res) => {
        console.log('here post!')
        const {username} = req.body
        console.log(username, 'username')
        res.send(JSON.stringify({})).status(200)
})


export default router
