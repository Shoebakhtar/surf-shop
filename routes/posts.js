const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middlewares');
const { 
    getPosts, 
    newPost,
    createPost 
} =  require('../controllers/posts');
// GET Posts /posts
router.get("/", errorHandler(getPosts));

// GET new        /posts/new
router.get("/new", newPost);

// POST create    /posts
router.post("/", errorHandler(createPost));

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

