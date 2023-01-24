import express from 'express';

import { createShortURL, getShortURL } from "../controller/short.js";
var router = express.Router();

router.post("/short", createShortURL);
router.post("/:shortUrl", getShortURL);

export default router;
