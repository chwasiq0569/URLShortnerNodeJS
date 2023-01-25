import express from 'express';

import { createShortURL, getShortURL } from "../controller/short.js";
var router = express.Router();

router.post("/short", createShortURL);
router.get("/:shortUrl", getShortURL);

export default router;
