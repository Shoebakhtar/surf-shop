const express = require('express');
const router = express.Router();
// GET Posts /posts
router.get("/", (req, res, next) =>{
    res.send("INDEX /posts");
});

// GET new        /posts/new
router.get("/new", (req, res, next) =>{
    res.send("NEW /posts/new")
});

// POST create    /posts
router.post("/", (req, res, next) =>{
    res.send("CREATE /posts")
});

// GET show       /posts/:id
router.get("/:id", (req, res, next) =>{
    res.send("SHOW /posts/:id")
});

// GET edit       /posts/:id/edit
router.get("/:id/edit", (req, res, next) =>{
    res.send("EDIT /:id/edit")
});

// PUT update     /posts/:id
router.put("/:id", (req, res, next) =>{
    res.send("UPDATE /:id");
});

// DELETE destroy /posts/:id
router.delete("/:id", (req, res, next) => {
    res.send("DELETE /:id");
})
module.exports = router;

