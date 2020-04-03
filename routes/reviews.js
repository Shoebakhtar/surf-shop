const express  = require('express');
const router   = express.Router({ mergeParams: true });

// GET reviews index  /posts/:id/:review_id
router.get('/', (req, res, next) =>{
    res.send("INDEX /reviews/:review_id/reviews");
})

// POST create    /posts/:id/reviews
router.post("/", (req, res, next) =>{
    res.send("CREATE /reviews")
});

// GET edit       /posts/:id/reviews/:review_id/edit
router.get("/:review_id/edit", (req, res, next) =>{
    res.send("EDIT /:review_id/edit")
});

// PUT update     /posts/:id/reviews/:review_id
router.put("/:review_id", (req, res, next) =>{
    res.send("UPDATE /:review_id");
});

// DELETE destroy /posts/:id/reviews/:review_id
router.delete("/:review_id", (req, res, next) => {
    res.send("DELETE /:review_id");
})

module.exports  = router;