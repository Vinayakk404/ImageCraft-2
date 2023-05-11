import express from 'express'
import * as dotenv from 'dotenv'
import {Configuration,OpenAIApi } from 'openai'

dotenv.config();
const router=express.Router();
router.route('/').get((req,res)=>{
    res.send("Working from DALL E");
})

const configuration=new Configuration({
  //  apiKey:"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"
    apiKey: process.env.OPENAI_API_KEY,

})

const openai=new OpenAIApi(configuration);
router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;
    
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});
export default router;